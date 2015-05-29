define(['react'], function (React) {
	return React.createClass({
		getInitialState: function() {
			return {
				reverse: false
			};
		},
		handleReverseClick: function () {
			this.setState({
				reverse: !this.state.reverse
			});
		},
		handlePersonClick: function (person) {
			var personClickHandler = this.props.personClickHandler;
			return function() {
				if (personClickHandler) {
					personClickHandler(person);
				}
			};
		},
		render: function() {
			var handlePersonClick = this.handlePersonClick;
			var reverse = this.state.reverse;
			var lastLetter;

			var personNodes = this.props.people
			.sort(function(a, b) {
				var result = a.name.localeCompare(b.name);
				return reverse ? 0 - result : result;
			})
			.reduce(function(arr, currentValue) {
				var firstLetter = currentValue.name.substring(0, 1).toUpperCase();
				if (firstLetter !== lastLetter) {
					arr.push((
						<div key={arr.length} className="app-directory-separator">{firstLetter}</div>
						));
					lastLetter = firstLetter;
				}
				arr.push((
					<div key={arr.length} className="app-directory-item" onClick={handlePersonClick(currentValue)}>{currentValue.name}</div>
					));
				return arr;
			}, []);

			return (
				<div className="app-directory-container">
					<button onClick={this.handleReverseClick} className="app-directory-reverse">reverse order</button>
					<div className="app-directory">
						{personNodes}
					</div>
				</div>
				);
		}
	})
});
