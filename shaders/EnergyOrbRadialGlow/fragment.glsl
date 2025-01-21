varying vec3 vPosition;
varying vec3 vNormal;

float a = 1.0;
float b = 0.0;
float c = 2.1;

void main(){
    // Normal
    vec3 normal = normalize(vNormal);
    
    // Fresnel
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel = abs(pow(dot(viewDirection, normal), a) + b);
    fresnel = tan(pow(fresnel, c));

    gl_FragColor = vec4(1.0, 1.0, 0.0, fresnel);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}