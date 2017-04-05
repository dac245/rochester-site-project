var a = document.getElementsByTagName("body");
var div = document.createElement("div");
var node;
var title;
var leave = document.createTextNode("X");
var h1 = document.createElement("h1");
var p = document.createElement("p");
var btn = document.createElement("button");
btn.className = "remove";
btn.onclick = escape;

function escape(){
	document.body.removeChild(div);
	node.nodeValue = "";
	title.nodeValue = "";
}

function startStyle(){
	btn.style.position = "absolute";
	btn.style.top = "-20px";
	btn.style.right = "-10px";
	btn.style.backgroundColor = "black";
	btn.style.border = "none";
	btn.style.color = "white";
	btn.style.padding = "10px";
	btn.style.borderRadius = "200px";
	h1.style.fontSize = "250%";
	p.style.fontSize = "x-large";
	div.style.width = "80%";
	div.style.height = "80%";
	div.style.backgroundColor="white";
	div.style.zindex = "1";
	div.style.position = "fixed";
	div.style.left = "10%";
	div.style.top = "10%";
	div.style.padding = "20px";
	div.style.border="3px solid black";
	
}

function clubappear(){
	title = document.createTextNode(
	"Localhost"
	);
	node = document.createTextNode(
	"Is a club in RIT that is an open forum student group focused on web and mobile application design and development and user experience design as stated in their introduction. They consist of about 50 members and to know more you can contact Ryan Hoffman through his email."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear1(){
	title = document.createTextNode(
	"Bee Keeper's Club"
	);
	node = document.createTextNode(
	"One of the more unique clubs, the Bee Keeper’s Club is bent on helping the bee population from declining and educate the student body by the conservation efforts going on in the local Rochester community. The club gives you meaningful advice on how to can support the bee population and the beekeepers themselves. They mention things such as limiting waste, planting bee friendly flowers and offering some of your time to local beekeepers. The Bee Keeper’s Club aim is to help improve the declining bee population at RIT and increase awareness on the difference between honeybees and wasps."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear2(){
	title = document.createTextNode(
	"Break Dancing Club"
	);
	node = document.createTextNode(
	"If you love to dance spontaneously and with an interesting flair that includes spins, flips and tricks then the break dancing club is for you. The club is filled with other like-minded people who love to breakdance and showing off their impressive skill set of moves. The club gives you opportunities to travel to breakdancing competitions throughout the United States, meet new people who enjoy the same thing you do and gain greater awareness of the hip-hop culture. Of course if you love breakdancing then you have to love hip-hop and the history behind the culture. The club meets Mondays and Wednesday from 9pm to 10pm and they are located at the Student Life Center Dance Studios."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1); 
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear3(){
	title = document.createTextNode(
	"Competitive Cyber Club (RC3)"
	);
	node = document.createTextNode(
	"The Competitive Cyber Security Club (RC3) is a club that focus’ on educating and preparing RIT students to compete in security-related competitions and to show off the skills of RIT student talent in the world of security today. The club doesn’t care if you are new to competitive cybersecurity or an expert, the only thing that matters is your willingness to learn and help out others who are like minded. RC3 have exercises that centers around live individual and team based security exercises, which covers a wide variety of areas in computing and security, this includes network security, application security, system security and a lot more. They have meetings every week on Fridays from 12pm to 2pm in the Golisano building in room 70-2410. Every meeting they have a 30 minute discussion on security news and current events, and then present a fundamental security concept or tool. They also do live hands on experience in the lab about the security news that they were discussing about. This is a student-run organization where students are more experiences with cyber security help their team either defend or attack an infrastructure based. These teams can be composed of experienced or novice students who try their best on maintaining or attacking."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear4(){
	title = document.createTextNode(
	"Equestrian Club"
	);
	node = document.createTextNode(
	"If you enjoy horses, even if you have never ridden one before then the Equestrian Club might be for you. The club’s focus is primarily social interaction with like-minded individuals who enjoy horses and horseback riding. You can discuss, engage with, and be fascinated by the horse world with other people who enjoy the same thing. You would be able to make friends with people who enjoy the same thing you do. The Equestrian Club meets weekly on Monday at 8:30pm in room 1305 at the Gosnell building."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear5(){
	title = document.createTextNode(
	"Fencing Club"
	);
	node = document.createTextNode(
	"The Fencing club teaches you all about sword play but without all the mess and hospital bills associated without actually having to use a real sword. You can learn the style of sword play by sparring with student coaches who are assisting at practice. Like most club the Fencing club doesn’t care about the skill level you may or may not have they just want participants who are willing to join and spar. The club host several tournaments every year to members and fencers from the surrounding area and they also go off-campus as well. The club meetings are every week on Saturdays from 2pm to 4pm in the SLC mini gym. They also held a charity event to benefit the American Red Cross, which there was no fee to participate, but donations are more than welcomed. The event was called “I Fence for Blood.”"
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear6(){
	title = document.createTextNode(
	"Juggling Club"
	);
	node = document.createTextNode(
	"The Juggling Club offers anybody who likes to or wants to juggle to stop by and show them what you got. Whether you’re an experienced master who can juggle just about anything in sight or you are newbie who wants to learn the art of juggling they won’t judge. The club is a group of juggling fanatics who like to do all sorts of tricks or juggling for balance, on a unicycle, pass clubs, contact juggle, spin diablos and almost anything you can think of. The club states they are informal so there are no sit down meetings, or any discussions, it is just show up and play. They also have their own festival called the RIT Spring Juggle-In and it lasts for three days. The Juggling Club meets Mondays and Wednesday from 8:30pm to 10:30pm and 8pm to 10pm, respectively. On Mondays they meet in the SLC mini gym and on Wednesday they meet in the SAU lobby."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear7(){
	title = document.createTextNode(
	"Anime Club"
	);
	node = document.createTextNode(
	"Anime are Japanese animations that have gained a worldwide following over the years. The Anime Club have a deep interest and appreciation of Anime as an art form and shares that with its members. The club holds various anime showings, as well as other social events. All of the showings are free and open to the public. The club has a vast library of anime DVDs and manga books that is open for access by all of its paid members. The club meets on Mondays, Thursdays, and Fridays at 8pm. On Mondays they meet in room 08-A300 and on Thursday they meet in room 08-1250. On Fridays, they meet in 06-A205. The club also hosts multiple events over the year such as social/gaming nights and off campus activities. At the last Thursday event of the fall semester, the club hosts a charity auction where anyone who comes can donate their old animes, mangas, and merchandise. The donations are then auctioned off to whoever is present and bidding, and all proceeds go to a worthy cause (an animal shelter, a children’s hospital, etc.). The biggest event on the anime club’s calendar is Tora-Con (“tora” meaning “tiger”), a campus wide convention dedicated to events, panels, guests and more. Everyone who enjoys anime is more than welcome to come on by."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear8(){
	title = document.createTextNode(
	"Rochester Wargamer Association and Guild (RWAG)"
	);
	node = document.createTextNode(
	"RWAG is a club devoted to non-electronic gaming. Board games, Card games, tabletop wargames and RPG are some of the games that the club is interested in. RWAG amasses a large collection of board games and has materials for many other types of games, so you’ll definitely have something fun to do. The club meets weekly on Tuesday night from 6pm to 11pm in the SAU cafeteria. These meetings are open to anybody wishing to play any game that they like. Some of the more popular games include Magic: The Gathering, Warhammer 40k and various board games. You do not need to a membership to attend so it is free for anyone willing to play, but if you would like to be a full-year member then it will cost $10 but you get a good amount of swag to go along with that membership."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}

function clubappear9(){
	title = document.createTextNode(
	"Kendo Club"
	);
	node = document.createTextNode(
	"RIT Kendo is a student run organization that educates its members in the ancient Japanese art of swordsmanship. Founded in 2001, the club is open to all students, faculty, and anyone with an interest in Kendo. RIT Kendo emphasizes that the study of Kendo does not solely train a practitioner on how to use a sword. Strong friendships, discipline, fitness and much more are gained through the study of Kendo! We hold weekly practices, and sometimes practice with U of R as well. We attend two to four tournaments a year and compete in teams and individuals. So far this year we have competed at Case Western University, Cornell University, and Columbia University."
	);
	
	h1.appendChild(title);
	p.appendChild(node);
	btn.appendChild(leave);
	
	startStyle();
	
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(btn);
	document.body.appendChild(div);
}
