var cfg;

(function() {
    'use strict';

    var Cfg = function() {
        // TODO: Define config fields and defaults here
        this.debugView = -1;
        this.debugScissor = false;
        this.debugShowTiles = false;

        this.bloomEffect = false;
        this.pixelateEffect = false;

        this.tiledShading = false;
    };

    var init = function() {
        cfg = new Cfg();

        var gui = new dat.GUI();
        // TODO: Define any other possible config values
        gui.add(cfg, 'debugView', {
            'None':             -1,
            '0 Depth':           0,
            '1 Position':        1,
            '2 Geometry normal': 2,
            '3 Color map':       3,
            '4 Normal map':      4,
            '5 Surface normal':  5
        });
        gui.add(cfg, 'debugScissor');
        gui.add(cfg, 'debugShowTiles');

        var eff0 = gui.addFolder('EFFECT NAME HERE');
        eff0.open();
        eff0.add(cfg, 'bloomEffect');
        eff0.add(cfg, 'pixelateEffect');

        var optimization = gui.addFolder("OPTIMIZATION");
        optimization.add(cfg, 'tiledShading');

        // TODO: add more effects toggles and parameters here
    };

    window.handle_load.push(init);
})();
