(function($){

    $.fn.happyLine = function(){

        if (this.length == 0) {
            return;
        }
        var dom = this;

        var mouseX = 0, mouseY = 0,

        innerWidth = $(dom).width(),
        innerHeight = $(dom).height(),

        windowHalfX = innerWidth / 2,
        windowHalfY = innerHeight / 2,

        SEPARATION = 200,
        AMOUNTX = 10,
        AMOUNTY = 10,

        camera, scene, renderer,

        boundX,boundY;

        init();
        getRandomBound();
        animate();

        function init() {

            var container, separation = 100, amountX = 50, amountY = 50,
            particles, particle;

            container = document.createElement('div');
            document.body.appendChild(container);

            camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 1, 10000 );
            camera.position.z = -100;

            scene = new THREE.Scene();

            renderer = new THREE.CanvasRenderer({alpha: true});
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( innerWidth, innerHeight );
            // container.appendChild( renderer.domElement );
            $(dom).append(renderer.domElement);

            // particles

            var PI2 = Math.PI * 2;
            var material = new THREE.SpriteCanvasMaterial( {

                color: 0xbdb5b5,
                program: function ( context ) {

                    context.beginPath();
                    context.arc( 0, 0, 0.5, 0, PI2, true );
                    context.fill();

                }

            } );

            var geometry = new THREE.Geometry();

            for ( var i = 0; i < 100; i ++ ) {

                particle = new THREE.Sprite( material );
                particle.position.x = Math.random() * 2 - 1;
                particle.position.y = Math.random() * 2 - 1;
                particle.position.z = Math.random() * 2 - 1;
                particle.position.normalize();
                particle.position.multiplyScalar( Math.random() * 10 + 450 );
                particle.scale.x = particle.scale.y = 10;
                scene.add( particle );

                geometry.vertices.push( particle.position );

            }

            // lines

            var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( {color: 0xbdb5b5, opacity: 0.5 } ) );
            scene.add( line );

            $(dom).on( 'mousemove', onDocumentMouseMove, false );
            $(dom).on( 'touchstart', onDocumentTouchStart, false );
            $(dom).on( 'touchmove', onDocumentTouchMove, false );

            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            innerWidth = $(dom).width(),
            innerHeight = $(dom).height(),

            windowHalfX = innerWidth / 2;
            windowHalfY = innerHeight / 2;

            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( innerWidth, innerHeight );

        }

        //

        function onDocumentMouseMove(event) {

            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
            mouseX *= 0.1;
            mouseY *= 0.1;

        }

        function onDocumentTouchStart( event ) {

            if ( event.touches.length > 1 ) {

                event.preventDefault();

                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;

                mouseX *= 0.1;
                mouseY *= 0.1;
            }

        }

        function onDocumentTouchMove( event ) {

            if ( event.touches.length == 1 ) {

                event.preventDefault();

                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
                mouseX *= 0.1;
                mouseY *= 0.1;

            }

        }

        //

        function animate() {

            requestAnimationFrame( animate );

            var oriX =  boundX - mouseX >= 0 ? 1 : -1;
            var oriY =  boundY - mouseY >= 0 ? 1 : -1;
            mouseX += 0.1 * oriX;
            mouseY += 0.1 * oriY;

            if ((oriX == 1 && (mouseX - boundX) > 0) || (oriX == -1 && (mouseX - boundX) < 0)) {
                getRandomBound();
            }
            if ((oriY == 1 && (mouseY - boundY) > 0) || (oriY == -1 && (mouseY - boundY) < 0)) {
                getRandomBound();
            }



            render();

        }

        function render() {

            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
            camera.lookAt( scene.position );

            renderer.render( scene, camera );

        }

        function getRandomBound() {
            boundX = Math.random() * 200 * (Math.random()>0.5?1:-1);
            boundY = Math.random() * 200 * (Math.random()>0.5?1:-1);
            console.log('random');
            console.log(boundX, boundY);
        }
    }
})($);