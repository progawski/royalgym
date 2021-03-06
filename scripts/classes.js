$(document).ready(function(){

    var dayOfWeek;
    var numberOfDay;
    var days = ['monday','thuesday','wednesday','thursday','friday','saturday','sunday'];

    // Show previous day on click
    $('.btnPreviousDay').click(function(){

        dayOfWeek = $(this).closest('td').data('day');
        numberOfDay = days.indexOf(dayOfWeek);

        if(numberOfDay-1 < 0){
            dayOfWeek = 'sunday';
        } else{
            dayOfWeek = days[numberOfDay-1];
        }

        $('table td:not(:nth-child(1)').hide();
        $('table td[data-day=' + dayOfWeek + ']').show();

    });
    // Show next day on click
    $('.btnNextDay').click(function(){

        dayOfWeek = $(this).closest('td').data('day');
        numberOfDay = days.indexOf(dayOfWeek);

        if(numberOfDay+1 > 6){
            dayOfWeek = 'monday';
        } else{
            dayOfWeek = days[numberOfDay+1];
        }

        $('table td:not(:nth-child(1)').hide();
        $('table td[data-day=' + dayOfWeek + ']').show();
    });

    // Multidemnsional object with classes details
    var classes = 
    {
        yoga: 
        {
            Name: "Yoga",
            Image: "images/yoga.jpg",
            Type: "The class involves working with the body, respiration and the mind. It leads to harmony and internal balance.", 
            Equipment: "blankets, rollers, blocks, yoga belts, chairs.", 
            Benefits: "body shaping, improvement in well-being and health, reduction of stress.", 
            Coach: "John Simonson"
        },
        healthySpine:
        {
            Name: "Healthy spine", 
            Image: "images/healthyspine.jpg",
            Type: "The training prevents and treats motor organs pain. During class, specialist exercises are performed using therapeutic techniques.", 
            Equipment: "rollers, gym balls, easy ball.", 
            Benefits: "minimising the effects of overstraining motor organs, increase in muscle flexibility, reduction of tension, improving spine and peripheral joints stability.", 
            Coach: "Elizabeth Gordon"
        },
        tabata:
        {
            Name: "Tabata", 
            Image: "images/tabata.jpg",
            Type: "Classes begin with a warm-up. It is an interval training focusing on basic compound exercises. Training is conducted according to the pattern: 20 seconds of workout, followed by 10 seconds of rest. Classes end with a stretching.", 
            Equipment: "steps, bars, kettlebells, barbells, ankle weights.", 
            Benefits: "improving body efficiency, fat burning.", 
            Coach: "Joanne Stone"
        },
        pilates:
        {
            Name: "Pilates", 
            Image: "images/pilates.jpg",
            Type: "It is a workout system leading to balance in the body. During the training very precise exercises are performed in combination with adequate breathing.", 
            Equipment: "rollers, gym balls, easy ball.", 
            Benefits: "improving strength, endurance and muscle flexibility, reducing the risk of injury, decrease in excessive muscle tension and reduction in back pain.", 
            Coach: "Elizabeth Gordon"
        },
        powerBike:
        {
            Name: "Power Bike", 
            Image: "images/powerbike.jpg",
            Type: "A form of group classes on SPINNING SPINNER bikes. Classes conducted to the rhythm of music, in various positions on the bike and with varied intensity. Great fun and pro-health effects.", 
            Equipment: "SPINNING SPINNER bikes.", 
            Benefits: "sensational effects in fat reduction, improvement in stamina, endurance as well as better state of being and overall health.", 
            Coach: "Billy Smiley"
        },
        absBlast:
        {
            Name: "Abs Blast", 
            Image: "images/absblast.jpg",
            Type: "Training is entirely focused on abdominal muscles.", 
            Equipment: "equipment available at the gym.", 
            Benefits: "strengthening of abdominal muscles, improving how the stomach looks.", 
            Coach: "Willy Stange"
        },
        fitFamily:
        {
            Name: "Fit Family", 
            Image: "images/fitfamily.jpg",
            Type: "Dance classes with elements of fitness routines for whole family. Classes begin with a dance warm-up and and end with in-choreography stretching and games for children.", 
            Equipment: "none.", 
            Benefits: "fat burning, learning basic and complex dance moves.", 
            Coach: "Angela Suarez"
        },
        powerPump:
        {
            Name: "Power Pump", 
            Image: "images/powerpump.jpg",
            Type: "Strength workout to the rhythm of music, which is a challenge for your muscles and increases your strength. Classes consist of a warm-up, 8 segments aimed at individual muscle groups and stretching.", 
            Equipment: "bar, step, mats, weights.", 
            Benefits: "improving fitness and general body condition. Classes allow to burn a large number of calories and prevent osteoporosis.", 
            Coach: "Wayne Adams"
        },
        jumpingFitness:
        {
            Name: "Jumping Fitness", 
            Image: "images/jumpingfitness.jpg",
            Type: "Training on trampolines begins with low intensity warm-up, which alternatively can be done without the use of trampolines. The main part of the training is intensive exercises on trampolines, which can be enhanced with strengthening with their use. Training ends with stretching.", 
            Equipment: "trampolines.", 
            Benefits: "burning calories, body contouring - mostly abdomen, thighs, buttocks.", 
            Coach: "Joanne Stone"
        },
        zumba:
        {
            Name: "Zumba", 
            Image: "images/zumba.jpg",
            Type: "Dance-choreography classes with elements of Latino dances and fitness routines. Classes begin with a dance warm-up and end with in-choreography stretching.", 
            Equipment: "none.", 
            Benefits: "fat burning, learning basic and complex dance moves.", 
            Coach: "Angela Suarez"
        },
        abt:
        {
            Name: "ABT", 
            Image: "images/abt.jpg",
            Type: "Training begins with a warm-up, during which step might be used. Classes are focused on strengthening the abdomen, firming of the buttocks and slimming down the thighs. A few minutes of stretching is done at the end of the training.", 
            Equipment: "barbells, rubber bands, step, easy ball, medicine ball, stability cushions.", 
            Benefits: "firming and strengthening lower body parts and abdomen.", 
            Coach: "Joanne Stone"
        },
        crossTraining:
        {
            Name: "Cross Training", 
            Image: "images/crossfit3.jpg",
            Type: "Training focused on explosive strength, which determines e.g. dynamic moves, jumps. Multi joint exercises and functional moves are used. Training begins with a worm up, followed by a very intensive main part that can take the form of circuit training. Training combines the most demanding elements of strength - endurance trainings. Training ends with stretching.", 
            Equipment: "bars, barbells, boxes, kettlebells, Bulgarian bags, medicine balls.", 
            Benefits: "body development, strengthening of the body, fat burning.", 
            Coach: "Billy Smiley"
        },
        fitBall:
        {
            Name: "Fit Ball", 
            Image: "images/fitball.jpg",
            Type: "Training starts with a warm-up with a gym ball. The main part of the class consists of strengthening, balance and stretching-relaxing exercises. The class ends with a stretching.", 
            Equipment: "exercise balls.", 
            Benefits: "strengthening postural muscles responsible for keeping a correct posture, balance training.", 
            Coach: "Cheryl Howard"
        },
        boxingFitness:
        {
            Name: "Boxing Fitness", 
            Image: "images/boxingfitness.jpg",
            Type: "Aerobic training with high intensity. It is a combination of elements of boxing, kickboxing and fitness. It&amp;rsquo;s characterised by high dynamics and precision of every movement. It maximises the consumption of accumulated energy. It&amp;rsquo;s a great way to beat stress. Perfect for both men and women.", 
            Equipment: "barbells.", 
            Benefits: "improving strength endurance, stamina, dynamic power, speed, balance and motor coordination.", 
            Coach: "Wayne Adams"
        }
    }

    //Replace modal content depending on chosen class

    var classCell = "";

    $('.classCell').click(function(){
        classCell = $(this).data('class');
        
        $('#className').text(classes[classCell]["Name"]);
        $('#className').css('color', $(this).css('color'));
        $('#classImage').attr('src', classes[classCell]["Image"]);
        $('#classType').text(classes[classCell]["Type"]);
        $('#classEquipment').text(classes[classCell]["Equipment"]);
        $('#classBenefits').text(classes[classCell]["Benefits"]);
        $('#classCoach').text(classes[classCell]["Coach"]);

        $('.modal-header').attr('class', 'modal-header bg-' + classCell);
        $('.modal-footer button').attr('class', 'btn bg-' + classCell);
        $('.modal-footer button').css('color', $(this).css('color'));

        $('#modalClass').modal();
    });



});

