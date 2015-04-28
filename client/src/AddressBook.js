define(['react', 'jquery'], function (React, jQuery) {
	var AddressBook = React.createClass({
		render: function() {
			return (
				<div className="app-address-book">
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
			        <div className="app-person-profile-container">
			            <div className="app-person-profile docs-highlight docs-blue" data-intro="Person Profile" data-position="bottom">
			                <div className="app-person-profile-header">
			                    <img className="app-person-profile-photo" src="avatar.png" />

			                    <h2>Adam Wright</h2>
			                    <div className="app-person-profile-department">
			                        Strategic Sales
			                    </div>
			                    <div className="app-person-profile-phone-number">
			                        919-555-5555
			                    </div>
			                    <div className="app-person-profile-phone-number">
			                        <a href="mailto:adam.wright@mycompany.com">adam.wright@mycompany.com</a>
			                    </div>
			                </div>
			                <div className="app-section">
			                    <div className="app-section-header">
			                        <h3>Education</h3>
			                    </div>
			                    <div className="app-section-body">
			                        <div className="app-history-item">
			                            <div className="app-history-item-dates">
			                                2004-2005
			                            </div>
			                            <div className="app-history-item-body">
			                                <div className="app-history-item-title">NC State University</div>
			                                Master's, Computer Science
			                            </div>
			                        </div>
			                        <div className="app-history-item">
			                            <div className="app-history-item-dates">
			                                2001-2004
			                            </div>
			                            <div className="app-history-item-body">
			                                <div className="app-history-item-title">NC State University</div>
			                                Bachelor's, Computer Science
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="app-section">
			                    <div className="app-section-header">
			                        <h3>Experience</h3>
			                    </div>
			                    <div className="app-section-body">
			                        <div className="app-history-item">
			                            <div className="app-history-item-dates">
			                                2001-Present
			                            </div>
			                            <div className="app-history-item-body">
			                                <div className="app-history-item-title">Megacorp</div>
			                                Software Developer
			                            </div>
			                        </div>
			                        <div className="app-history-item">
			                            <div className="app-history-item-dates">
			                                1980-2001
			                            </div>
			                            <div className="app-history-item-body">
			                                <div className="app-history-item-title">Umbrella Corp</div>
			                                Software Developer
			                            </div>
			                        </div>
			                    </div>
			                </div>

			            </div>
			        </div>
			    </div>
				);
		}
	});
	return AddressBook;
});