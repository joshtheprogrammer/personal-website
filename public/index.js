window.addEventListener('load', function() {
	document.body.style.backgroundColor = "black";

	var isMobile = navigator.userAgent.indexOf( "Mobile" ) !== -1 || navigator.userAgent.indexOf( "iPhone" ) !== -1 || navigator.userAgent.indexOf( "Android" ) !== -1 || navigator.userAgent.indexOf( "Windows Phone" ) !== -1;

	var terminal = document.createElement('div');
	terminal.style.fontSize = "20px";
	if (isMobile) {
		terminal.style.fontSize = "12px";
	}
	terminal.style.fontFamily = "RobotoMono";

	terminal.style.background = window.getComputedStyle(document.body).background;
	terminal.style.color = "yellow";

	document.body.appendChild(terminal);
	
	var output = document.createElement('div');
	output.style.overflow = "wrap";

	let time = 0;

	let intro = paragraph("Coming soon...", true);

	terminal.appendChild(output);
	
	var input = document.createElement('input');
	input.style.fontFamily = terminal.style.fontFamily;
	input.style.fontSize = terminal.style.fontSize;
	input.style.background = terminal.style.background;
	input.style.color = terminal.style.color;
	input.style.border = "none";
	input.style.outline = "none";
	input.style.display = "inline";
	input.style.width = "25%";
	if (isMobile) {
		input.style.width = "40%";
	}


	function animationSort(obj) {
		if (isMobile) {
			obj.classList.add("animationMobile");
		}
		else {
			obj.classList.add("animation");
		}
	}

	function animationRemove(obj) {
		if (isMobile) {
			obj.classList.remove("animationMobile");
		}
		else {
			obj.classList.remove("animation");
		}
	}

	var userID = document.createElement('div');
	userID.innerHTML = "[visitor@joshuahonguyen.com ~]$ ";
	animationSort(userID)


	time += 300;
	setTimeout(function () {
		terminal.appendChild(userID);
	}, time);

	time += 500;
	setTimeout(function() {
		animationRemove(intro);
		userID.style.display = "inline";
		terminal.appendChild(input);
		input.focus()
	}, time)



	var cmds = [];
	var cmds_counter = 0;
	var cmds_occupied = true;
	if (localStorage.getItem("cmds")) {
		cmds = localStorage.getItem("cmds").split(',');
		cmds_occupied = false;
	}

	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			const trimmed = input.value.trim();

			if (trimmed != "") {
				cmds_counter = 0;
				cmds_occupied = false;
				if (cmds.length > 5) {
					cmds.pop()
				}
				cmds.unshift(input.value);
				localStorage.setItem("cmds", cmds);
				CMD(trimmed)
			}
			else {
				output.innerHTML += "[visitor@joshuahonguyen.com ~]$ "+input.value + "<br/>";
				window.scrollTo(0, document.body.offsetHeight);
			}
		}
		else if (event.ctrlKey && event.keyCode === 67) {
			input.value = "";
			cmds_counter = 0;
			cmds_occupied = false;
		}
		else if (event.keyCode === 38) {
			if (cmds_counter < cmds.length && cmds_occupied == false) {
				input.value = cmds[cmds_counter];
				cmds_counter += 1;
			}
		}
		else if (event.keyCode === 40) {
			if (cmds_counter >= 0 && cmds_occupied == false) {
				cmds_counter -= 1;
				input.value = cmds[cmds_counter];
			}
			if (cmds_counter == -1 && cmds_occupied == false) {
				cmds_counter = 0;
				input.value = ""
			}
		}
		else if (event.keyCode === 8 || event.keyCode === 46) {
			if (input.value == "") {
				cmds_counter = 0;
				cmds_occupied = false;
			}
		}
		else {
			if (input.value != "") {
				cmds_counter = 0;
				cmds_occupied = true;
			}
		}
	})

	function CMD(command) {
		let name = command.toLowerCase().split(' ')[0];
		let params = command.substring(name.length+1).toLowerCase().split(' ').filter(elm => elm);

		for (let i = 0; i < params.length; i++) {
       		if (params[i].includes('-')) {
        		if (params[i+1] != undefined && !params[i+1].includes('-')) {
                	params[i] += " " + params[i+1];
                	params.splice(i+1, 1)
				}
			}
		}

		paragraph("[visitor@joshuahonguyen.com ~]$ " + input.value);
		switch (name.toLowerCase()) {
			case "help":
				prompt = [
					"<br/>",
					"<text class=\"helpTitle\">social</text>                Show social networks.",
					"<text class=\"helpTitle\">clear</text>                 Clear terminal.",
					"<text class=\"helpTitle\">contact</text>             Email me",
					"<br/>"
				]

				input.disabled = true;
				extra = 0;
				pList = [];
				for (let x = 0; x < prompt.length; x++) {
					if (x >= prompt.length-1) {
						extra += 200;
					}
					setTimeout(function() {
						pList.push(paragraph(prompt[x], true));
						if (x == prompt.length-1) {
							input.disabled = false;
							input.focus()
							pList.forEach(p => {pList.forEach(p=>{animationRemove(p)})})
						}
						window.scrollTo(0, document.body.offsetHeight);

					}, (x*250)+extra)
				}
				break;
			case "social":
				prompt = [
					"<br/>",
					"Instagram           <a href=\"https://www.instagram.com/joshuahonguyen/\" class=\"socialTitle\">instagram/joshuahonguyen</a>",
					"Twitter                <a href=\"https://www.twitter.com/joshuahonguyen\" class=\"socialTitle\">twitter/joshuahonguyen</a>",
					"TikTok                 <a href=\"https://www.tiktok.com/@joshuahonguyen\" class=\"socialTitle\">tiktok/joshuahonguyen</a>",
					"<br/>"
				]

				input.disabled = true;
				extra = 0;
				pList = [];
				for (let x = 0; x < prompt.length; x++) {
					if (x >= prompt.length-1) {
						extra += 200;
					}
					setTimeout(function() {
						pList.push(paragraph(prompt[x], true));
						if (x == prompt.length-1) {
							extra = 0;
							input.disabled = false;
							input.focus();
							pList.forEach(p => {pList.forEach(p=>{animationRemove(p)})})
						}
						window.scrollTo(0, document.body.offsetHeight);
					}, (x*250)+extra)
				}
				break;
			case "contact":
				location.href = "mailto:joshuahonguyen@gmail.com";
				break;
			case "clear":
				output.innerHTML = "";
				break;
			default:
				input.disabled = true;
				p = paragraph(name + ": command not found", true)
				setTimeout(function() {
					animationRemove(p);

					input.disabled = false;
					input.focus();
				}, 250)
				break;
		}
		window.scrollTo(0, document.body.offsetHeight);
		input.value = "";
	}

	function paragraph(value, animation=false) {
		const paragraph = document.createElement("p");

		paragraph.style.margin = 0;

		let result = "";

		for (let x = 0; x < value.length; x++) {
			if (value.charAt(x) == " " && value.charAt(x+1) == " ") {
				result += "&nbsp;&nbsp;"
				x++;
			}
			else {
				result += value.charAt(x);
			}
		}

		paragraph.innerHTML = result;


		for (let x = 0; x < paragraph.getElementsByClassName("helpTitle").length; x++) {
			paragraph.getElementsByClassName("helpTitle")[x].style.color = "orange";

			paragraph.getElementsByClassName("helpTitle")[x].onmouseover = function() {
				paragraph.getElementsByClassName("helpTitle")[x].style.background = "#73ABAD"
				paragraph.getElementsByClassName("helpTitle")[x].style.color = "black";
			};
			paragraph.getElementsByClassName("helpTitle")[x].onmouseleave = function() {
				paragraph.getElementsByClassName("helpTitle")[x].style.background = "black";
				paragraph.getElementsByClassName("helpTitle")[x].style.color = "orange";
			};

			paragraph.getElementsByClassName("helpTitle")[x].onclick = function() {
				input.value = paragraph.getElementsByClassName("helpTitle")[x].innerHTML;
				input.focus();
			};
		}

		for (let x = 0; x < paragraph.getElementsByClassName("socialTitle").length; x++) {
			paragraph.getElementsByClassName("socialTitle")[x].style.color = "#9C8394";
			paragraph.getElementsByClassName("socialTitle")[x].style.textDecoration = "none";
			paragraph.getElementsByClassName("socialTitle")[x].onmouseover = function() {
				paragraph.getElementsByClassName("socialTitle")[x].style.background = "#73ABAD"
				paragraph.getElementsByClassName("socialTitle")[x].style.color = "black";
			};
			paragraph.getElementsByClassName("socialTitle")[x].onmouseleave = function() {
				paragraph.getElementsByClassName("socialTitle")[x].style.background = "black";
				paragraph.getElementsByClassName("socialTitle")[x].style.color = "#9C8394";
			};

		}

		if (animation) {
			animationSort(paragraph);
		}
		output.appendChild(paragraph);
		return paragraph;
	}
});
