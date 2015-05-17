// bio object
var bio = {
	"name": "Alexander Verge",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "438-863-8392",
		"email": "alexander@alexanderverge.com",
		"github": "alexanderverge",
		"twitter": "@alexanderverge",
		"location": "Seattle, WA, USA"
	},
	"welcomeMessage": "Software Engineer/Hacker, avid reader, fitness enthusiast, coffee lover.",
	"skills": ["Algorithms", "Problem Solving", "Software Architecture", "Web Development"],
	"biopic": "images/research.jpg"
};

// function to display biographical information
bio.display = function()
{
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	// add website information
	var formattedWebsite = HTMLcontactGeneric.replace("%data%", '<a href="http://www.alexanderverge.com">alexanderverge.com</a>');
	formattedWebsite = formattedWebsite.replace("%contact%", "Website");
	$("#footerContacts").append(formattedWebsite);

	if (bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};

// education object
var education = {
	"schools": [
		{
			"name": "McGill University",
			"location": "Montreal, QC, Canada",
			"degree": "B.Sc.",
			"majors": ["Computer Science"],
			"dates": 2015,
			"url": "https://www.mcgill.ca/"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/responsive-images--ud882"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Intro to JQuery",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
		},
		{
			"title": "Object-Oriented JavaScript",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/object-oriented-javascript--ud015"
		},
		{
			"title": "HTML5 Canvas",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/html5-canvas--ud292"
		},
		{
			"title": "Website Performance Optimization",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/website-performance-optimization--ud884"
		},
		{
			"title": "Browser Rendering Optimization",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/browser-rendering-optimization--ud860"
		},
		{
			"title": "Intro to AJAX",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-ajax--ud110"
		},
		{
			"title": "JavaScript Design Patterns",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-design-patterns--ud989"
		},
		{
			"title": "JavaScript Testing",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-testing--ud549"
		}
	]
};

// function to display education information
education.display = function()
{
	for (var school in education.schools)
	{
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedName = formattedName.replace('#', education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$('.education-entry:last').append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);

		for (var major in education.schools[school].majors)
		{
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$('.education-entry:last').append(formattedMajor);
		}
	}

	$("#education").append(HTMLonlineClasses);

	for (var course in education.onlineCourses)
	{
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		formattedTitle = formattedTitle.replace('#', education.onlineCourses[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDates);

		// Exclude URL, and instead put link in formattedTitleSchool
		var formattedURL = HTMLonlineURL.replace("%data%", ''/*education.onlineCourses[course].url*/);
		$(".education-entry:last").append(formattedURL);
	}
};

// work object
var work = {
	"jobs": [
		{
			"employer": "Microsoft",
			"title": "Software Engineer",
			"location": "Seattle, WA, USA",
			"dates": "June 2015 - Present",
			"description": "Software Engineer in the Bing Experiences team.",
			"url": 'http://bing.com' /* custom attribute */
		}
	]
};

// function to display work information
work.display = function()
{
	for (var job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace('#', work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

// projects object
var projects = {
	"projects": [
		{
			"title": "Gin Rummy",
			"dates": 2014,
			"description": "I built an open sorce Gin Rummy card game. Check it out on GitHub!",
			"images": ['images/ginrummy-1.gif'],
			"url": 'https://github.com/alexanderverge/ginrummy' /* custom attribute */
		},
		{
			"title": "Personal Website",
			"dates": 2013,
			"description": "I built a personal website for my blogs, books, and projects!",
			"images": ["images/personal-website-1.png"],
			"url": 'http://alexanderverge.com/'
		}
	]
};

// function to display project information
projects.display = function ()
{
	for (var project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedTitle = formattedTitle.replace('#', projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0)
		{
			for (image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// click event handling function
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

// perform internationalization of name
function inName() {
	var name = bio.name.trim().split(" ");
	name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name.join(" ");
}

// add internationalize interactive button
$("#main").append(internationalizeButton);

// add credits
$("#main").append(credits);

// add map
$("#mapDiv").append(googleMap);

// apply information display functions
bio.display();
education.display();
work.display();
projects.display();
