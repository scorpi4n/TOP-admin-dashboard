const announcements = (function() {
	const headings = document.querySelectorAll(".announcements h2")
	
	for (heading of headings) {		
		heading.addEventListener('click', toggleAnnouncement)
	}

	function toggleAnnouncement() {
		if (this.nextElementSibling.open == false) {
			this.nextElementSibling.show()
		} else {
			this.nextElementSibling.close()
		}
	}
})()
