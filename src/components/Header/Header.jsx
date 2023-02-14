import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="container__search">
			<div className="search">
				<div className="search__selects">
					<select name="priority" id="priority">
						<optgroup label="priority">
							<option value="">all</option>
							<option value="high">High</option>
							<option value="middle">Middle</option>
							<option value="low">Low</option>
						</optgroup>
					</select>

					<select name="column" id="column">
						<optgroup label="column">
							<option value="all">all</option>
							<option value="todo">Todo</option>
							<option value="progress">Progress</option>
							<option value="completed">completed</option>
						</optgroup>
					</select>

					<select name="tag" id="tag">
						<optgroup label="tag">
							<option value="">all</option>
							{/* todos.map(e => <option value={e.tag}>{e.tag}</option>)<option value="">tag</option> */}
						</optgroup>
					</select>

					<select name="time" id="time">
						<optgroup label="time">
							<option value="all">all</option>
							<option value="day">last day</option>
							<option value="week">last week</option>
							<option value="month">last month</option>
						</optgroup>
					</select>

					<i className={`fa-solid fa-calendar header__icon`}></i>
				</div>

				<div className="search__input">
					<input type="text" placeholder="search by importance" />
					<i className="fa-solid fa-magnifying-glass"></i>
				</div>
			</div>
		</div>
	);
};

export default Header;
