define(['react'], function (React) {
	return React.createClass({
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
			var personNodes = this.props.people
			.sort(function(a, b) {
				return (a.name.toUpperCase() > b.name.toUpperCase());
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
					<div className="app-directory">
						{personNodes}
					</div>
				</div>
				);
		}
	})
});