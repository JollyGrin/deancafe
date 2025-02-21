import * as THREE from 'three';

const DecalShader = {
	uniforms: {
		map: { value: null },
		outlineColor: { value: new THREE.Color('red') },
		outlineWidth: { value: 0.02 },
		alphaThreshold: { value: 0.1 }
	},
	vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
	fragmentShader: `
        uniform sampler2D map;
        uniform vec3 outlineColor;
        uniform float outlineWidth;
        uniform float alphaThreshold;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        float getAlpha(vec2 uv) {
            return texture2D(map, uv).a;
        }

        void main() {
            vec4 texColor = texture2D(map, vUv);
            
            // Check neighboring pixels for alpha differences
            vec2 texelSize = vec2(1.0) / vec2(textureSize(map, 0));
            float alpha = getAlpha(vUv);
            
            // Sample neighboring pixels
            float leftAlpha = getAlpha(vUv + vec2(-texelSize.x, 0.0));
            float rightAlpha = getAlpha(vUv + vec2(texelSize.x, 0.0));
            float topAlpha = getAlpha(vUv + vec2(0.0, texelSize.y));
            float bottomAlpha = getAlpha(vUv + vec2(0.0, -texelSize.y));

            // Calculate edge detection
            float outline = 0.0;
            if (alpha > alphaThreshold) {
                // Check if any neighboring pixel has alpha below threshold
                if (leftAlpha < alphaThreshold || 
                    rightAlpha < alphaThreshold || 
                    topAlpha < alphaThreshold || 
                    bottomAlpha < alphaThreshold) {
                    outline = 1.0;
                }
            }

            // Apply outline
            vec3 finalColor = mix(texColor.rgb, outlineColor, outline);
            float finalAlpha = max(texColor.a, outline);

            gl_FragColor = vec4(finalColor, finalAlpha);
        }
    `
};

export class DecalMaterial extends THREE.ShaderMaterial {
	constructor(parameters = {}) {
		super({
			uniforms: THREE.UniformsUtils.clone(DecalShader.uniforms),
			vertexShader: DecalShader.vertexShader,
			fragmentShader: DecalShader.fragmentShader,
			transparent: true,
			depthTest: true,
			depthWrite: false,
			polygonOffset: true,
			polygonOffsetFactor: -4
		});

		// Set initial parameters
		if (parameters.map) this.uniforms.map.value = parameters.map;
		if (parameters.outlineColor)
			this.uniforms.outlineColor.value.set(parameters.outlineColor);
		if (parameters.outlineWidth !== undefined)
			this.uniforms.outlineWidth.value = parameters.outlineWidth;
		if (parameters.alphaThreshold !== undefined)
			this.uniforms.alphaThreshold.value = parameters.alphaThreshold;
	}

	get map() {
		return this.uniforms.map.value;
	}

	set map(value) {
		this.uniforms.map.value = value;
	}

	get outlineColor() {
		return this.uniforms.outlineColor.value;
	}

	set outlineColor(value) {
		this.uniforms.outlineColor.value.set(value);
	}

	get outlineWidth() {
		return this.uniforms.outlineWidth.value;
	}

	set outlineWidth(value) {
		this.uniforms.outlineWidth.value = value;
	}

	get alphaThreshold() {
		return this.uniforms.alphaThreshold.value;
	}

	set alphaThreshold(value) {
		this.uniforms.alphaThreshold.value = value;
	}
}
