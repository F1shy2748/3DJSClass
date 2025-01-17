import * as THREE from 'three'

export const addBoilerPlateMesh = () =>{
    const box = new THREE.BoxGeometry(1,1,1);
    const boxMaterial = new THREE.MeshBasicMaterial({color: '0xff0000'});
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    boxMesh.position.set(-2,0,0);
    return boxMesh;
}

export function addStandardMesh(){
    const box = new THREE.BoxGeometry(1,1,1);
    const boxMaterial = new THREE.MeshStandardMaterial({color: '0xff0000'});
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    boxMesh.position.set(-1,0,0);
    return boxMesh;
}

export function addMesh1(){
    const shape = new THREE.BoxGeometry(1,1,1);
    const shapeMaterial = new THREE.MeshBasicMaterial({color: '0xff0000'});
    const shapeMesh = new THREE.Mesh(shape, shapeMaterial);
    shapeMesh.position.set(-1,0,0);
    return shapeMesh;
}