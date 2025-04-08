var config = {
    style: 'mapbox://styles/themax22/cm9266jca005v01qyhtzceotp',
    accessToken: 'pk.eyJ1IjoidGhlbWF4MjIiLCJhIjoiY205MmhyenluMGFydjJrcXpsb255OGlkZCJ9.AdtPZKvUm6FsCa14YDkJTA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'NYC Rental Price Map',
    subtitle: 'Average Housing Rental Price Across Districts',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'right',
            hidden: false,
            title: 'Residential Area in NYC',
            image: './asset/Housing.jpg',
            description: 'This map shows the distribution of residential land use across New York City, highlighting areas primarily designated for housing. <a href="https://felt.com/map/Residential-Area-In-NYC-3KT6CvEuQcuE9CKSUXr45HB?loc=40.7231,-73.9822,10.61z"> <strong>Explore more</strong></a> <br><br><img src="images/legend1.png" style="height:200%;width:400px;"></img> <br><br>From the perspective of land use, about 75% of construction land in NYC is currently residential land.',
            location: {
                center: [-73.88000, 40.73073],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 1
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 0
                },
                {
                    layer: 'borough-name-ahbtrf',
                    opacity: 1              
                },
                {
                    layer:'borough-boundaries-name2-1rvhhl',
                    opacity:1
                },
                {
                    layer:'join-pricing-392f9r',
                    opacity: 0
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:0
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },

            ],
            onChapterExit: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 1
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 0
                },
                {
                    layer: 'borough-name-ahbtrf',
                    opacity: 1              
                },
                {
                    layer:'borough-boundaries-name2-1rvhhl',
                    opacity:1
                },
                {
                    layer:'join-pricing-392f9r',
                    opacity: 0
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:0
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Housing Price Distribution',
            image: './images/Price_categories.png',
            description: 'The rental price data is sourced from Airbnb public listings in New York City, representing available short-term rental units. Using QGIS, the individual listings were spatially joined to boundaries, and the average rental price per night was calculated for each district. <br><br><img src="images/vertical_violin.png" style="height:200%;width:400px;"></img> <br>The spatial distribution of average nightly rental prices in New York City reveals clear patterns: <br>· Manhattan stands out with the highest rental prices, particularly in the central and southern parts of the borough.<br>·Brooklyn shows moderate prices, with areas closer to Manhattan (e.g., Williamsburg, Brooklyn Heights) having relatively higher rates.<br>· Queens, the Bronx, and Staten Island generally exhibit lower average rental prices, especially as distance from Manhattan increases.<br>A gradual gradient from high prices in the core (Manhattan) to lower prices towards the periphery is observed.<br><br><img src="images/legend2.png" style="height:200%;width:400px;"></img>',
            location: {
                center: [-74.15785, 40.71573],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 0
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 0
                },
                {
                    layer: 'borough-name-ahbtrf',
                    opacity: 1              
                },
                {
                    layer:'borough-boundaries-name2-1rvhhl',
                    opacity:1
                },
                {
                    layer:'join-pricing-392f9r',
                    opacity: 1
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:0
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 0
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 0
                },
                {
                    layer: 'borough-name-ahbtrf',
                    opacity: 1              
                },
                {
                    layer:'borough-boundaries-name2-1rvhhl',
                    opacity:1
                },
                {
                    layer:'join-pricing-392f9r',
                    opacity: 1
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:0
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },
            ],
        },
        {
            id: 'third-container',
            alignment: 'center',
            hidden: false,
            title: 'Tracing the Price of Home in NYC',
            description: 'Rental prices in New York City draw a clear map of its communities. Manhattan  heart hosts high-income neighborhoods, while areas in Brooklyn show moderate rates. Further out, Queens, the Bronx, and Staten Island offer more affordable housing, home to many middle- and lower-income families.<br><br>As rental prices fall outward from Manhattan center, questions about fairness arise. In the next part, we explore whether communities paying less for housing enjoy the same access to parks and green spaces as those in wealthier districts, revealing deeper patterns of urban inequality.',
            location: {
                center: [-74.00685, 40.73073],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 0
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 0
                },
                {
                    layer: 'borough-name-ahbtrf',
                    opacity: 1              
                },
                {
                    layer:'borough-boundaries-name2-1rvhhl',
                    opacity:1
                },
                {
                    layer:'join-pricing-392f9r',
                    opacity: 1
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:0
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 0
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 0
                },
                {
                    layer: 'borough-name-ahbtrf',
                    opacity: 1              
                },
                {
                    layer:'borough-boundaries-name2-1rvhhl',
                    opacity:1
                },
                {
                    layer:'join-pricing-392f9r',
                    opacity: 1
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:0
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },
            ],
        }
    ]
};