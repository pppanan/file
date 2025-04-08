var config = {
    style: 'mapbox://styles/themax22/cm9266jca005v01qyhtzceotp',
    accessToken: 'pk.eyJ1IjoidGhlbWF4MjIiLCJhIjoiY205MmhyenluMGFydjJrcXpsb255OGlkZCJ9.AdtPZKvUm6FsCa14YDkJTA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'NYC Green Space Inequity Ratings',
    subtitle: 'Average Housing Rental Price Across Districts',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Greenspace Distribution in NYC',
            image: './images/Greenery.jpg.jpg',
            description: 'New York City, often perceived as a dense urban environment, actually features an extensive tapestry of parks and open spaces—ranging from iconic Central Park to community gardens scattered throughout all five boroughs. Drawing on data from NYC’s “Walk to a Park” initiative, we can visualize both park locations and areas within a ¼-mile or ½-mile walking distance of these green spaces. This approach reveals which neighborhoods enjoy convenient park access and where potential gaps remain.  <br><br>By examining the distribution of parks and walkable service areas side by side, this session highlights the city’s overall greenspace coverage and sheds light on inequities in park accessibility across New York.<br><br><img src="images/legend6.png" style="height:200%;width:400px;"></img>',
            location: {
                center: [-74.15785, 40.71573],
                zoom: 9.7,
                pitch: 0,
                bearing: 0
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
                    opacity: 1
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
                    opacity: 0.3

                },
            ],
            onChapterExit: [
                {
                    layer: 'nycresidence8-694bmc',
                    opacity: 0
                },
                {
                    layer: 'park-properties-5yhl93',
                    opacity: 1
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
                    opacity: 1
                },
            ]
        },
        {
            id: 'second-container',
            alignment: 'right',
            hidden: false,
            title: 'Greenspace Accessibility Across NYC',
            description: 'For each district, we take the park service area (the sum of all park buffers within that district) and divide it by the district’s total area. This simple ratio shows the share of the district that falls within walking distance of a park—higher values mean better access.<br><br><strong>Overall Accessibility:</strong> Most neighborhoods across the five boroughs have relatively good access to green spaces, with parks, recreation areas and natural reserves distributed widely.<br><br><strong> Core Urban Area:</strong> Manhattan shows strong park accessibility, particularly due to Central Park and smaller neighborhood parks. However, certain areas in Midtown and Lower Manhattan may have slightly lower greenspace coverage. <br><br><strong>Outer Boroughs with Inequity:</strong> Small pockets—particularly in parts of the Bronx and eastern Queens—appear to have fewer accessible green spaces.<br><br><img src="images/legend7.png" style="height:200%;width:400px;"></img>',
            location: {
                center: [-73.80685, 40.71073],
                zoom: 9.7,
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
                    opacity: 0
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:1
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
                    opacity: 0
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0              
                },
                {
                    layer:'park-service-rate2-61xoi9',
                    opacity:1
                },
                {
                    layer:'park-service-area-cu2b63',
                    opacity: 0
                },
            ],
        },
        
        {
            id: 'fourth-container',
            alignment: 'center',
            hidden: false,
            title: 'Uneven Greenspace Distribution and Satisfaction in NYC',
            description: 'The spatial distribution of greenspaces across New York City shows that while parks are widely available, central areas like Manhattan enjoy denser and higher-quality parks compared to outer boroughs. Access to and satisfaction with greenspaces tends to decrease as distance from the city center increases.<br><br>Similarly, greenspace ratings reveal notable disparities. Parks in high-rent neighborhoods achieve significantly higher user satisfaction scores, while parks in lower-rent areas like the Bronx and Staten Island generally receive lower ratings. These findings suggest an underlying inequality, setting the stage to explore how housing rents and greenspace equity are interconnected.',
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
                    layer: 'park-service-rate2-61xoi9',
                    opacity: 1
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0             
                },
                {
                    layer: 'join-pricing-392f9r',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'park-service-rate2-61xoi9',
                    opacity: 1
                },
                {
                    layer: 'parkratings2-9i6btb',
                    opacity: 0             
                },
                {
                    layer: 'join-pricing-392f9r',
                    opacity: 0
                }
            ],
        }
    ]
};