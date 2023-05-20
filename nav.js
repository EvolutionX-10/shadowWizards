const navbar = document.querySelector(".hamburger");
const mid = document.querySelector(".mid");
/**@type {HTMLElement} */
const center_text = document.querySelector('.center-text');


navbar.addEventListener("click", () => {
	if (navbar.classList.contains("opened")) {
		throwDown([...mid.children][0]).onfinish = () => {
			mid.innerHTML = "";
			center_text.style.display = 'flex';
		};
		navbar.classList.remove("opened");
	} else {
		navbar.classList.add("opened");
		center_text.style.display = 'none';
		const div = document.createElement("div");
		div.classList.add("mnavbar");
		mid.appendChild(div);
		const current = window.location.href;

		["Home", "About", "Contact Us", "Support"].forEach((a) => {
			const innerDiv = document.createElement("a");
			let link;
			switch (a) {
				case "Home":
					link = current.includes('#') ? current.split('#')[0] : current;
					break;
				case "About":
					link = current.includes('#') ? current.split('#')[0].concat('#f0') : current.concat('#f0');
					break;
				case "Contact Us":
					link = current.includes('#') ? current.split('#')[0].concat('#f1') : current.concat('#f1');
					break;
				case "Support":
					link = current.includes('#') ? current.split('#')[0].concat('#f2') : current.concat('#f2');
					break;
				}
			innerDiv.href = link;
			innerDiv.classList.add("mnavbar_text");
			innerDiv.innerText = a;
			div.appendChild(innerDiv);
		});
	}
});

window.onscroll = () => {
	if (navbar.classList.contains("opened")) {
		window.scrollTo(0, 0);
	}
};

/**
 *
 * @param {HTMLElement} elem
 */
function throwDown(elem) {
	return elem.animate(
		[
			{
				transform: "translateY(100%)",
			},
		],
		{
			duration: 800,
			easing: "cubic-bezier(.97,.09,.71,1)",
		}
	);
}