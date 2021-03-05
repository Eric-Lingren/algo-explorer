import { useEffect, useRef } from 'react'
import * as THREE from "three"
import {gsap, TweenMax, TweenLite, Power0, Power1, Power2, TimelineLite, Linear, MotionPathPlugin, MorphSVGPlugin } from 'gsap'


// gsap.registerPlugin(MotionPathPlugin)

const Three = () => {
    const threeRef = useRef(null)

    // // sceneSetup = () => {}
    // const sceneSetup = () => {
    //     // get container dimensions and use them for scene sizing
    //     const width = threeRef.current.clientWidth;
    //     const height = threeRef.current.clientHeight;
    
    //     threeRef.current.scene = new THREE.Scene();
    //     threeRef.current.camera = new THREE.PerspectiveCamera(
    //         75, // fov = field of view
    //         width / height, // aspect ratio
    //         0.1, // near plane
    //         1000 // far plane
    //     );
        
    //     // set some distance from a cube that is located at z = 0
    //     threeRef.current.camera.position.z = 5;
    
    //     threeRef.current.renderer = new THREE.WebGLRenderer();
    //     threeRef.current.renderer.setSize( width, height );
    //     // el.appendChild( this.renderer.domElement ); // mount using React ref
    // }

    
    // const addCustomSceneObjects = () => {
    //     const geometry = new THREE.BoxGeometry(2, 2, 2);
    //     const material = new THREE.MeshPhongMaterial( {
    //         color: 0x156289,
    //         emissive: 0x072534,
    //         side: THREE.DoubleSide,
    //         flatShading: true
    //     } );
    //     threeRef.current.cube = new THREE.Mesh( geometry, material );
    //     threeRef.current.scene.add( threeRef.current.cube );

    //     const lights = [];
    //     lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    //     lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    //     lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    //     lights[ 0 ].position.set( 0, 200, 0 );
    //     lights[ 1 ].position.set( 100, 200, 100 );
    //     lights[ 2 ].position.set( - 100, - 200, - 100 );

    //     threeRef.current.scene.add( lights[ 0 ] );
    //     threeRef.current.scene.add( lights[ 1 ] );
    //     threeRef.current.scene.add( lights[ 2 ] );
    // };
    
    
    // const startAnimationLoop = () => {
    //     // this.cube.rotation.x += 0.01;
    //     // this.cube.rotation.y += 0.01;

    //     threeRef.current.renderer.render( threeRef.current.scene, threeRef.current.camera );
    //     threeRef.current.requestID = window.requestAnimationFrame(threeRef.current.startAnimationLoop);
    // };


    useEffect(() => {
        // sceneSetup()
        // addCustomSceneObjects()
        // startAnimationLoop()

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        renderer.setSize( window.innerWidth, window.innerHeight-80 );
        document.body.appendChild( renderer.domElement );

        var cubeGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
        var icosahedronGeometry = new THREE.IcosahedronGeometry( 1.5, 0 );
        // var sphereGeometry = new THREE.SphereGeometry(.65, 32, 32);
        // var material = new THREE.MeshBasicMaterial( { color: 0xff8001 } );
        // var material = new THREE.MeshDepthMaterial()
    
        // var material = new THREE.MeshDepthMaterial({
        //     depthPacking: THREE.RGBADepthPacking
        // });

        // var material = new THREE.MeshLambertMaterial({
        //     color: 0xff0000,
        //     emissive: 0x3a3a3a
        // })

        var material = new THREE.MeshPhongMaterial({
            color: 0xff8001 ,
            emissive: 0x2a0000,
            shininess: 10,
            specular: 0xffffff
        })

        // var ballGeo = new THREE.SphereGeometry(5,5,5);
        // var material = new THREE.MeshPhongMaterial({color: 0xF7FE2E}); 
        // var ball = new THREE.Mesh(ballGeo, material);

        // var pendulumGeo = new THREE.CylinderGeometry(1, 1, 50, 16);
        // ball.updateMatrix();
        // pendulumGeo.merge(ball.geometry, ball.matrix);

        // var pendulum = new THREE.Mesh(pendulumGeo, material);
        // scene.add(pendulum);




        const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
        icosahedron.position.set(0, 0, 0);
        icosahedron.castShadow = true;
        scene.add( icosahedron );

        const cube = new THREE.Mesh(cubeGeometry, material);
        cube.position.set(3, 0, 0);
        cube.castShadow = true;
        // scene.add( cube );


        // icosahedron.updateMatrix(); // as needed
        // singleGeometry.merge(icosahedron.geometry, icosahedron.matrix);
        // cube.updateMatrix(); // as needed
        // singleGeometry.merge(cube.geometry, cube.matrix);

        // var mesh = new THREE.Mesh(singleGeometry, material);
        // scene.add(mesh);

        // const cube2 = new THREE.Mesh(geometry, material);
        // cube2.position.set(3, 0, 0);
        // cube2.castShadow = true;
        // scene.add( cube2 );

        // const box = new THREE.Mesh(boxGeometry, material);
        // box.position.set(0, 0, 0);
        // box.castShadow = true;
        // scene.add( box );


        // var sphere = new THREE.Mesh( 
        //     new THREE.SphereGeometry(100,16,12),
        //     new THREE.MeshLambertMaterial( { color: 0x2D303D, wireframe: true, shading: THREE.FlatShading } ))
        // var cylinder = new THREE.Mesh(
        //     new THREE.CylinderGeometry(100, 100, 200, 16, 4, false ),
        //     new THREE.MeshLambertMaterial( { color: 0x2D303D, wireframe: true, shading: THREE.FlatShading } ));
        // cylinder.position.y = -100;
        // scene.add(sphere);
        // scene.add(cylinder);


        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(1.25, 22.25, 12.25);
        spotLight.position.set( 1, 100, 100 );
        spotLight.castShadow = true;
        scene.add( spotLight );

        // spotLight.shadow.mapSize.width = 512; // default
        // spotLight.shadow.mapSize.height = 512; // default
        // spotLight.shadow.camera.near = 0.5; // default
        // spotLight.shadow.camera.far = 500; // default
        // spotLight.shadow.focus = 1; // default
        

        // const planeGeometry = new THREE.PlaneGeometry( 20, 20, 3, 3 );
        // const planeMaterial = new THREE.MeshStandardMaterial( { color:"rgb(255, 255, 255)" } )
        // const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        // plane.receiveShadow = true;
        // scene.add( plane );

        camera.position.z = 5;
        const animate = () => {
            requestAnimationFrame( animate );
            icosahedron.rotation.x += 0.01;
            icosahedron.rotation.y += 0.01;
            icosahedron.rotation.z += 0.01;
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            // TweenLite.to( cube, 0.7, {opacity: 1})
            // pendulum.rotation.x += 0.01;
            // pendulum.rotation.y += 0.01;
            renderer.render( scene, camera );
            renderer.setClearColor( 0xffffff ) // Background color
        };
        animate();
        // TweenLite.to( icosahedron, 1.7, {opacity: 0})
        // TweenMax.to(icosahedron.position, 5, { x: 2, y: 2, z: -2, ease: Power0.easeNone });
        const tl = new TimelineLite({paused: false});
            tl
                .to(icosahedron.position, 3, { x: 4, y: -.1, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 2, { x: 5, y: .5, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 2, { x: 4, y: .8, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 2, { x: 3, y: .9, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 3, { x: 0, y: .9, z: 0, ease: Power0.easeIn })
                // Half Way
                .to(icosahedron.position, 3, { x: -3, y: .9, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 2, { x: -4, y: .8, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 2, { x: -5, y: .5, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 2, { x: -4, y: -.1, z: 0, ease: Power0.easeIn })
                .to(icosahedron.position, 3, { x: 0, y: 0, z: 0, ease: Power0.easeIn })

        const tl2 = new TimelineLite({paused: false});
            tl2
                .to(icosahedron.scale, 3, { x: .7, y: .7, z: .7, ease: Power0.easeIn  })
                .to(icosahedron.scale, 2, { x: .5, y: .5, z: .5, ease: Power0.easeIn  })
                .to(icosahedron.scale, 2, { x: .4, y: .4, z: .4, ease: Power0.easeIn  })
                .to(icosahedron.scale, 2, { x: .3, y: .3, z: .3, ease: Power0.easeIn  })
                .to(icosahedron.scale, 3, { x: .3, y: .3, z: .3, ease: Power0.easeIn  })
                // Half Way
                .to(icosahedron.scale, 3, { x: .3, y: .3, z: .3, ease: Power0.easeIn  })
                .to(icosahedron.scale, 2, { x: .4, y: .4, z: .4, ease: Power0.easeIn  })
                .to(icosahedron.scale, 2, { x: .5, y: .5, z: .5, ease: Power0.easeIn  })
                .to(icosahedron.scale, 2, { x: .7, y: .7, z: .7, ease: Power0.easeIn  })
                .to(icosahedron.scale, 3, { x: 1, y: 1, z: 1, ease: Power0.easeIn  })

        tl.play()

        // var values = [{x:0, y:0}, {x:100, y:100}, {x:50, y:200}, {x:40, y:30}, {x:200, y:50}];
        // var curviness = 1.25;

        // TweenLite.set("#path", {strokeWidth:5, stroke:"red", fill:"none"});

        // var data = TweenMax.BezierPlugin.bezierThrough(values, curviness);
        // var d = "M" + data.x[0].a + "," + data.y[0].a + " C" + segmentToString(data.x[0], data.y[0]); //the <path> data
        // for (var i = 1; i < data.x.length; i++) {
        // d += "," + segmentToString(data.x[i], data.y[i]);
        // }
        // TweenLite.set("#path", {attr:{d:d}});
        // TweenLite.to("#circle", 5, {bezier:{values:values, curviness:curviness}, ease:Power1.easeInOut})

        // function segmentToString(x, y) {
        //     return [x.b.toFixed(2), y.b.toFixed(2), x.c.toFixed(2), y.c.toFixed(2), x.d.toFixed(2), y.d.toFixed(2)].join(",");
        // }

    }, [])


    
    return(
        <div ref={threeRef} />
    )

}

export default Three