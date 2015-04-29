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
			var personNodes = this.props.people
			.sort(function(a, b) {
				if (reverse) {
					return (a.name.toUpperCase() < b.name.toUpperCase());
				} else {
					return (a.name.toUpperCase() > b.name.toUpperCase());
				}
			})
			.reduce(function(arr, currentValue) {
				var previousChar = arr[arr.length - 1] ? arr[arr.length - 1].name[0].toUpperCase() : null;
				var currentChar = currentValue.name[0].toUpperCase();
				if (currentChar !== previousChar) {
					arr.push(currentChar);
				}
				arr.push(currentValue);
				return arr;
			}, [])
			.map(function(personOrString, index) {
				if (typeof personOrString === 'string') {
					return (
						<div key={index} className="app-directory-separator">{personOrString}</div>
						);
				} else {
					return (
						<div key={index} className="app-directory-item" onClick={handlePersonClick(personOrString)}>{personOrString.name}</div>
						);
				}
			});

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