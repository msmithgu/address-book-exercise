define(['react'], function (React) {
	return React.createClass({
		render: function() {
			return (
				<div className="app-directory-container">
		            <div className="app-directory">
		                <div className="app-directory-separator">A</div>
		                <div className="app-directory-item">
		                    Adam Wright
		                </div>
		                <div className="app-directory-item">
		                    Alex Watson
		                </div>

		                <div className="app-directory-separator">B</div>
		                <div className="app-directory-item">
		                    Blair Michaels
		                </div>
		                <div className="app-directory-item" data-intro="Directory Item" data-position="bottom">
		                    Brent Edwards
		                </div>

		                <div className="app-directory-separator">C</div>
		                <div className="app-directory-item">
		                    Charles Nelson
		                </div>
		                <div className="app-directory-item" data-intro="Directory Item" data-position="bottom">
		                    Chris Matthews
		                </div>

		                <div className="app-directory-separator">D</div>
		                <div className="app-directory-item">
		                    Damien Tyson
		                </div>
		                <div className="app-directory-item">
		                    Daniel Boone
		                </div>
		                <div className="app-directory-item">
		                    Derek Edwards
		                </div>
		                <div className="app-directory-item" data-intro="Directory Item" data-position="bottom">
		                    Drake Johnson
		                </div>
		            </div>
		        </div>
				);
		}
	})
});