import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";


function Hola () {
	return <div>Hola</div>
}

function GutenTag() {
	return <div>Guten tag</div>
}

export default function(p) {
  console.log(p);
  return <div>
		<ul>
			<li>
				<NavLink to="/hello" activeClassName="activeLink" exact>
					Hola
				</NavLink>
			</li>
			<li>
				<NavLink to="/hello/gutentag" activeClassName="activeLink">
					Guten tag
				</NavLink>
			</li>
		</ul>
		<div>
			<Route path="/hello" exact component={Hola} />
			<Route path="/hello/gutentag" component={GutenTag} />
		</div>
	</div>;
}
