const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },

    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },

    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },

    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },

    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },

    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];


// Get elements from the HTML
const courseList = document.querySelector("#courseList");
const creditTotal = document.querySelector("#creditTotal");
const filterButtons = document.querySelectorAll(".filter");


// Display courses
function displayCourses(courseArray) {

    courseList.innerHTML = "";


    courseArray.forEach((course) => {

        const courseCard = document.createElement("article");

        courseCard.classList.add("course-card");


        // Check whether the student completed the course
        if (course.completed) {
            courseCard.classList.add("completed");
        }


        // Course code
        const courseCode = document.createElement("span");

        courseCode.classList.add("course-code");

        courseCode.textContent =
            `${course.subject} ${course.number}`;


        // Course title
        const courseTitle = document.createElement("span");

        courseTitle.classList.add("course-title");

        courseTitle.textContent =
            course.title;


        // Course credits
        const courseCredits = document.createElement("span");

        courseCredits.classList.add("course-credits");

        courseCredits.textContent =
            `${course.credits} credits`;


        courseCard.appendChild(courseCode);

        courseCard.appendChild(courseTitle);

        courseCard.appendChild(courseCredits);


        // Show completed label
        if (course.completed) {

            const completedLabel =
                document.createElement("span");

            completedLabel.classList.add("completed-label");

            completedLabel.textContent =
                "Completed";

            courseCard.appendChild(completedLabel);
        }


        courseList.appendChild(courseCard);

    });


    // Calculate total credits using reduce()
    const totalCredits = courseArray.reduce(
        (total, course) => total + course.credits,
        0
    );


    creditTotal.textContent =
        `The total credits for courses listed above is ${totalCredits}.`;

}


// Filter courses
function filterCourses(category) {

    let filteredCourses;


    if (category === "all") {

        filteredCourses = courses;

    } else {

        // Filter the array by CSE or WDD
        filteredCourses = courses.filter(
            (course) => course.subject === category
        );

    }


    displayCourses(filteredCourses);

}


// Add click events to the buttons
filterButtons.forEach((button) => {

    button.addEventListener("click", () => {


        // Remove active class from every button
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });


        // Make clicked button active
        button.classList.add("active");


        // Get the selected category
        const category =
            button.dataset.filter;


        // Display selected courses
        filterCourses(category);

    });

});


// Display all courses when page loads
displayCourses(courses);