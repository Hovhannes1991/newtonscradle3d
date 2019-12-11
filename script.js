        var canvas = document.getElementById("renderCanvas");

        var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

        var createScene = function () {          
        
            engine = new BABYLON.Engine(canvas);
            
            var scene = new BABYLON.Scene(engine);
            
            //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -20), scene);
            var camera = new BABYLON.ArcRotateCamera("camera1", 1.5 , Math.PI / 1.5, -20, BABYLON.Vector3(0, 0, -0), scene);
            // This targets the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());
        
            // This attaches the camera to the canvas
            camera.attachControl(canvas, true);
        
            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(-1, 1, 1), scene);
        
            // Default intensity is 1. Let's dim the light a small amount
            light.intensity = 0.7;
            //light.diffuse = new BABYLON.Color3(1, 0, 0);
        	//light.specular = new BABYLON.Color3(0, 1, 0);
        	//light.groundColor = new BABYLON.Color3(0, 1, 0);
        
            // Our built-in 'ground' shape.
            var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 8, height: 3}, scene);
        
            ground.position.x = -1;
        
            var material1 = new BABYLON.StandardMaterial("grass1", scene);
        	material1.emissiveTexture = new BABYLON.Texture("textures/grass.png", scene);
            var material2 = new BABYLON.StandardMaterial("grass2", scene);
        	material2.diffuseTexture = new BABYLON.Texture("textures/grass.png", scene);
            var material3 = new BABYLON.StandardMaterial("water", scene);
        	material3.ambientTexture = new BABYLON.Texture("textures/water.jpg", scene);
        	material3.diffuseColor = new BABYLON.Color3(0.04, 0.91, 0.38);
        	var material4 = new BABYLON.StandardMaterial("worldMap", scene);
        	material4.diffuseTexture = new BABYLON.Texture("textures/world-map.jpg", scene);
            var material5 = new BABYLON.StandardMaterial("mat", scene);
            material5.emissiveColor = BABYLON.Color3.Blue();
            material5.wireframe = true;
            
            var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.5, segments: 32}, scene);
            var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.5, segments: 32}, scene);
            var sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.5, segments: 32}, scene);
            var sphere4 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.5, segments: 32}, scene);
            var sphere5 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.5, segments: 32}, scene);
        
            
            sphere1.position.x = -4;
            sphere1.position.y = 1.5;
            sphere1.material = material1;
        
            sphere2.position.x = -2.5;
            sphere2.position.y = 1.5;
            sphere2.material = material2;
        
            sphere3.position.x = -1;
            sphere3.position.y = 1.5;
            sphere3.material = material3;
        
            sphere4.position.x = 0.5;
            sphere4.position.y = 1.5;
            sphere4.material = material4;            
        
            sphere5.position.x = 2;
            sphere5.position.y = 1.5;
            sphere5.material = material5;
        
            var line1 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 4, diameterTop: 0.1, diameterBottom: 0.1});
            var line2 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 4, diameterTop: 0.1, diameterBottom: 0.1})
            var line3 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 4, diameterTop: 0.1, diameterBottom: 0.1})
            var line4 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 4, diameterTop: 0.1, diameterBottom: 0.1})
            var line5 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 4, diameterTop: 0.1, diameterBottom: 0.1})
             
            line1.position.x = -4;
            line1.position.y = 4;
        
            line2.position.x = -2.5;
            line2.position.y = 4;
        
            line3.position.x = -1;
            line3.position.y = 4;
        
            line4.position.x = 0.5;
            line4.position.y = 4;
        
            line5.position.x = 2;
            line5.position.y = 4;
        
            var topStand = BABYLON.MeshBuilder.CreateGround("ground", {
                        width: 8,
                        height: 3
                    }, scene);    
        
            topStand.position.x = -1;
            topStand.position.y = 6;
        
            var verticalStand1 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 6, diameterTop: 0.3, diameterBottom: 0.3});
            verticalStand1.position.x = -4.5;
            verticalStand1.position.y = 3;
            verticalStand1.position.z = 1;
            var verticalStand2 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 6, diameterTop: 0.3, diameterBottom: 0.3});
            verticalStand2.position.x = -4.5;
            verticalStand2.position.y = 3;
            verticalStand2.position.z = -1;
            var verticalStand3 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 6, diameterTop: 0.3, diameterBottom: 0.3});
            verticalStand3.position.x = 2.5;
            verticalStand3.position.y = 3;
            verticalStand3.position.z = -1;
            var verticalStand4 = BABYLON.MeshBuilder.CreateCylinder('line1', {width: 2, height: 6, diameterTop: 0.3, diameterBottom: 0.3});
            verticalStand4.position.x = 2.5;
            verticalStand4.position.y = 3;
            verticalStand4.position.z = 1;
            
            let dir1 = 1;
            let dir2 = 1;
            let sp = 1;
        
            engine.runRenderLoop(function(){
                if(sp == 1){
                    if(line1.rotation.z <= -0.5 || line1.rotation.z >= 0.01){
                        dir1 *= -1;
                    }            
                    if(line1.rotation.z >= 0.01){
                        sp = 2;
                    }
                    line1.rotation.z -= 0.01 * dir1;
                    sphere1.position.x -= 0.02 * dir1;
                    sphere1.position.y += 0.01 * dir1;
                }
                else{
                    if(line5.rotation.z >= 0.5 || line5.rotation.z <= -0.01){
                        dir2 *= -1;
                    }
                    if(line5.rotation.z <= -0.01){
                        sp = 1;
                    }
                    line5.rotation.z += 0.01 * dir2;
                    sphere5.position.x += 0.02 * dir2;
                    sphere5.position.y += 0.01 * dir2;
                }
            })
        
            return scene;    
        };
        
 
 if (!engine) throw 'engine should not be null.';
 scene = createScene();
        
        

        engine.runRenderLoop(function () {
            if (scene) {
                scene.render();
            }
        });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
