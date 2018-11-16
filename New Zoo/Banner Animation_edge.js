/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'image',
                            rect: ['0px', '0', '1280px', '300px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background3.png",'0px','0px'],
                            filter: [0, -6, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Lion',
                            type: 'image',
                            rect: ['0px', '0px', '184px', '300px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Lion.png",'0px','0px']
                        },
                        {
                            id: 'Bird1',
                            symbolName: 'Bird_Flying',
                            type: 'rect',
                            rect: ['764px', '-110px', '133px', '174px', 'auto', 'auto'],
                            transform: [[],[],[],['0.29885','0.29885']]
                        },
                        {
                            id: 'Bird2',
                            symbolName: 'Bird_Flying',
                            type: 'rect',
                            rect: ['803px', '175px', '133px', '174px', 'auto', 'auto'],
                            transform: [[],[],[],['0.17285','0.17285']]
                        },
                        {
                            id: 'Bird3',
                            symbolName: 'Bird_Flying',
                            type: 'rect',
                            rect: ['777px', '-135px', '133px', '174px', 'auto', 'auto'],
                            transform: [[],[],[],['0.18965','0.18965']]
                        },
                        {
                            id: 'Trunk1',
                            type: 'image',
                            rect: ['591px', '214px', '25px', '30px', 'auto', 'auto'],
                            borderRadius: ["0px 12.5px", "0px 12.5px", "0px 12.5px", "0px 12.5px"],
                            fill: ["rgba(0,0,0,0)",im+"Trunk%20P12.png",'0px','0px']
                        },
                        {
                            id: 'Trunk2',
                            type: 'image',
                            rect: ['598px', '227px', '25px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Trunk%20P22.png",'0px','0px']
                        },
                        {
                            id: 'Lion_Roar',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Sound%20Effect%20-%20Lion%20Roar.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Speaker',
                            type: 'image',
                            rect: ['1243px', '266px', '30px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Speaker.png",'0px','0px']
                        },
                        {
                            id: 'NZ_Logo',
                            type: 'image',
                            rect: ['478px', '-105px', '425px', '425px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"NZ%20Logo.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Homebtn',
                            type: 'text',
                            rect: ['37px', '258px', '109px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(253, 253, 253); font-size: 39px;\">Home</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Aboutbtn',
                            type: 'text',
                            rect: ['235px', '258px', '109px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255); font-size: 39px;\">About</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Gallerybtn',
                            type: 'text',
                            rect: ['435px', '259px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"font-size: 39px; color: rgb(255, 255, 255);\">Gallery</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Animalbtn',
                            type: 'text',
                            rect: ['635px', '259px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"font-size: 39px; color: rgb(255, 255, 255);\">Animals</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Contactbtn',
                            display: 'block',
                            type: 'text',
                            rect: ['850px', '259px', '201px', '45px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"font-size: 39px; color: rgb(255, 255, 255);\">Contact Us</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Arrow5',
                            display: 'none',
                            type: 'image',
                            rect: ['1031px', '266px', '75px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px']
                        },
                        {
                            id: 'Arrow4',
                            display: 'none',
                            type: 'image',
                            rect: ['762px', '267px', '75px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px']
                        },
                        {
                            id: 'Arrow3',
                            display: 'none',
                            type: 'image',
                            rect: ['548px', '266px', '75px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px']
                        },
                        {
                            id: 'Arrow2',
                            display: 'none',
                            type: 'image',
                            rect: ['329px', '266px', '75px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px']
                        },
                        {
                            id: 'Arrow1',
                            display: 'none',
                            type: 'image',
                            rect: ['132px', '266px', '75px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(228,62,62,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10021.224,
                    autoPlay: true,
                    labels: {
                        "Loop": 0
                    },
                    data: [
                        [
                            "eid59",
                            "scaleY",
                            1999,
                            3299,
                            "linear",
                            "${Bird3}",
                            '0.08826',
                            '0.18965'
                        ],
                        [
                            "eid50",
                            "left",
                            2000,
                            3299,
                            "linear",
                            "${Bird2}",
                            '-78px',
                            '803px'
                        ],
                        [
                            "eid4640",
                            "filter.saturate",
                            0,
                            1700,
                            "linear",
                            "${Background}",
                            '1',
                            '1.68'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            2000,
                            3299,
                            "linear",
                            "${Bird2}",
                            '0.17285',
                            '0.29885'
                        ],
                        [
                            "eid3461",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Arrow4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "top",
                            6900,
                            999,
                            "linear",
                            "${Trunk2}",
                            '225px',
                            '216px'
                        ],
                        [
                            "eid140",
                            "top",
                            7899,
                            501,
                            "linear",
                            "${Trunk2}",
                            '216px',
                            '213px'
                        ],
                        [
                            "eid321",
                            "top",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            '213px',
                            '222px'
                        ],
                        [
                            "eid322",
                            "top",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            '222px',
                            '227px'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            2800,
                            0,
                            "linear",
                            "${Bird1}",
                            '0.29885',
                            '0.29885'
                        ],
                        [
                            "eid207",
                            "-webkit-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4721",
                            "-moz-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4722",
                            "-ms-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4723",
                            "msTransformOrigin",
                            6900,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4724",
                            "-o-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4725",
                            "transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid208",
                            "-webkit-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4726",
                            "-moz-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4727",
                            "-ms-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4728",
                            "msTransformOrigin",
                            7899,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4729",
                            "-o-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4730",
                            "transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid317",
                            "-webkit-transform-origin",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [24.51,10.84],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4731",
                            "-moz-transform-origin",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [24.51,10.84],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4732",
                            "-ms-transform-origin",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [24.51,10.84],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4733",
                            "msTransformOrigin",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [24.51,10.84],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4734",
                            "-o-transform-origin",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [24.51,10.84],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4735",
                            "transform-origin",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            [50,50],
                            [24.51,10.84],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid318",
                            "-webkit-transform-origin",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            [24.51,10.84],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4736",
                            "-moz-transform-origin",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            [24.51,10.84],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4737",
                            "-ms-transform-origin",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            [24.51,10.84],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4738",
                            "msTransformOrigin",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            [24.51,10.84],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4739",
                            "-o-transform-origin",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            [24.51,10.84],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4740",
                            "transform-origin",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            [24.51,10.84],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid60",
                            "left",
                            1999,
                            3299,
                            "linear",
                            "${Bird3}",
                            '-79px',
                            '777px'
                        ],
                        [
                            "eid3460",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Arrow5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "top",
                            2000,
                            3299,
                            "linear",
                            "${Bird1}",
                            '169px',
                            '-110px'
                        ],
                        [
                            "eid52",
                            "top",
                            2000,
                            3299,
                            "linear",
                            "${Bird2}",
                            '175px',
                            '-119px'
                        ],
                        [
                            "eid3462",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Arrow3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "top",
                            6905,
                            994,
                            "linear",
                            "${Trunk1}",
                            '210px',
                            '214px'
                        ],
                        [
                            "eid337",
                            "top",
                            9400,
                            600,
                            "linear",
                            "${Trunk1}",
                            '214px',
                            '212px'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            2800,
                            0,
                            "linear",
                            "${Bird1}",
                            '0.29885',
                            '0.29885'
                        ],
                        [
                            "eid748",
                            "opacity",
                            4495,
                            837,
                            "easeInCubic",
                            "${Lion}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid933",
                            "opacity",
                            6500,
                            800,
                            "easeInCubic",
                            "${Lion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "left",
                            2000,
                            3299,
                            "linear",
                            "${Bird1}",
                            '-103px',
                            '764px'
                        ],
                        [
                            "eid3464",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Arrow1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "rotateZ",
                            2800,
                            0,
                            "linear",
                            "${Trunk1}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            6900,
                            999,
                            "linear",
                            "${Trunk1}",
                            '0deg',
                            '-33deg'
                        ],
                        [
                            "eid333",
                            "rotateZ",
                            9400,
                            600,
                            "linear",
                            "${Trunk1}",
                            '-33deg',
                            '0deg'
                        ],
                        [
                            "eid105",
                            "rotateZ",
                            6900,
                            999,
                            "linear",
                            "${Trunk2}",
                            '0deg',
                            '-35deg'
                        ],
                        [
                            "eid111",
                            "rotateZ",
                            7899,
                            501,
                            "linear",
                            "${Trunk2}",
                            '-35deg',
                            '-54deg'
                        ],
                        [
                            "eid323",
                            "rotateZ",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            '-54deg',
                            '-23deg'
                        ],
                        [
                            "eid324",
                            "rotateZ",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            '-23deg',
                            '0deg'
                        ],
                        [
                            "eid3463",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Arrow2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            2000,
                            3299,
                            "linear",
                            "${Bird2}",
                            '0.17285',
                            '0.29885'
                        ],
                        [
                            "eid3459",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Contactbtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid134",
                            "left",
                            6905,
                            994,
                            "linear",
                            "${Trunk1}",
                            '591px',
                            '592px'
                        ],
                        [
                            "eid345",
                            "left",
                            9400,
                            600,
                            "linear",
                            "${Trunk1}",
                            '592px',
                            '591px'
                        ],
                        [
                            "eid58",
                            "top",
                            1999,
                            3299,
                            "linear",
                            "${Bird3}",
                            '161px',
                            '-135px'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            1999,
                            3300,
                            "linear",
                            "${Bird3}",
                            '0.08826',
                            '0.18965'
                        ],
                        [
                            "eid108",
                            "left",
                            6900,
                            999,
                            "linear",
                            "${Trunk2}",
                            '598px',
                            '611px'
                        ],
                        [
                            "eid210",
                            "left",
                            8400,
                            0,
                            "linear",
                            "${Trunk2}",
                            '611px',
                            '611px'
                        ],
                        [
                            "eid319",
                            "left",
                            8900,
                            500,
                            "linear",
                            "${Trunk2}",
                            '611px',
                            '606px'
                        ],
                        [
                            "eid320",
                            "left",
                            9400,
                            600,
                            "linear",
                            "${Trunk2}",
                            '606px',
                            '598px'
                        ],
                        [
                            "eid143",
                            "-webkit-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4741",
                            "-moz-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4742",
                            "-ms-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4743",
                            "msTransformOrigin",
                            6900,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4744",
                            "-o-transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4745",
                            "transform-origin",
                            6900,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid144",
                            "-webkit-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4746",
                            "-moz-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4747",
                            "-ms-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4748",
                            "msTransformOrigin",
                            7899,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4749",
                            "-o-transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4750",
                            "transform-origin",
                            7899,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid332",
                            "-webkit-transform-origin",
                            9400,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4751",
                            "-moz-transform-origin",
                            9400,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4752",
                            "-ms-transform-origin",
                            9400,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4753",
                            "msTransformOrigin",
                            9400,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4754",
                            "-o-transform-origin",
                            9400,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4755",
                            "transform-origin",
                            9400,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid328",
                            "-webkit-transform-origin",
                            10000,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4756",
                            "-moz-transform-origin",
                            10000,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4757",
                            "-ms-transform-origin",
                            10000,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4758",
                            "msTransformOrigin",
                            10000,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4759",
                            "-o-transform-origin",
                            10000,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4760",
                            "transform-origin",
                            10000,
                            0,
                            "linear",
                            "${Trunk1}",
                            [26,6.67],
                            [26,6.67],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                            [ "eid1724", "trigger", 800, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Lion_Roar}', [] ] ],
                            [ "eid2254", "trigger", 1900, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird3}', [] ] ],
                            [ "eid2255", "trigger", 1999, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird2}', [] ] ],
                            [ "eid2378", "trigger", 1999, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird1}', [] ] ],
                            [ "eid2256", "trigger", 2400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird3}', [] ] ],
                            [ "eid2257", "trigger", 2600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird2}', [] ] ],
                            [ "eid71", "trigger", 2700, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird1}', [] ] ],
                            [ "eid69", "trigger", 2799, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird3}', [] ] ],
                            [ "eid66", "trigger", 3100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird1}', [] ] ],
                            [ "eid62", "trigger", 3100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird2}', [] ] ],
                            [ "eid61", "trigger", 3299, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird3}', [] ] ],
                            [ "eid63", "trigger", 3510, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird1}', [] ] ],
                            [ "eid72", "trigger", 3510, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird2}', [] ] ],
                            [ "eid64", "trigger", 3762, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird3}', [] ] ],
                            [ "eid65", "trigger", 3843, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird2}', [] ] ],
                            [ "eid73", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird1}', [] ] ],
                            [ "eid74", "trigger", 4135, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird2}', [] ] ],
                            [ "eid70", "trigger", 4299, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird3}', [] ] ],
                            [ "eid75", "trigger", 4494, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Bird1}', [] ] ],
                            [ "eid68", "trigger", 4600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird2}', [] ] ],
                            [ "eid67", "trigger", 4715, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird3}', [] ] ],
                            [ "eid76", "trigger", 4960, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bird1}', [] ] ]
                    ]
                }
            },
            "Bird_Flying": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '706px', '914px', 'auto', 'auto'],
                            id: 'Bird_Sprite',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Bird%20Sprite.png', '0px', '0px', '706px', '914px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '174px']
                        }
                    }
                },
                timeline: {
                    duration: 833,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            '0px',
                            '174px'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [0,0],
                            [-10,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-10,-10],
                            [-148,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-148,-10],
                            [-286,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-286,-10],
                            [-424,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-424,-10],
                            [-562,-10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-562,-10],
                            [-10,-189],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-10,-189],
                            [-148,-189],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-148,-189],
                            [-286,-189],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-286,-189],
                            [-424,-189],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-424,-189],
                            [-562,-189],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-562,-189],
                            [-10,-368],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-10,-368],
                            [-148,-368],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-148,-368],
                            [-286,-368],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-286,-368],
                            [-424,-368],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-424,-368],
                            [-562,-368],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-562,-368],
                            [-10,-547],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-10,-547],
                            [-148,-547],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-148,-547],
                            [-286,-547],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-286,-547],
                            [-424,-547],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-424,-547],
                            [-424,-547],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            [-562,-547],
                            [-562,-726],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Bird_Sprite}",
                            '0px',
                            '133px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Banner%20Animation_edgeActions.js");
})("EDGE-12885463");
