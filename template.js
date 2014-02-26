/*
 * grunt-init-big-jade-gists
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Aaron Jorbin 
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Big Jade Gists';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
  ], function(err, props) {
	props.keywords = [];
	props.devDependencies = {
		"grunt": "~0.4.1",
		"matchdep": "~0.3.0",
		"grunt-contrib-clean": "~0.4.0",
		"grunt-contrib-copy": "~0.4.1",
		"grunt-contrib-watch": "~0.5.1",
		"grunt-contrib-jade": "~0.5.0",
		"grunt-contrib-connect": "~0.3.0",
		"grunt-open": "~0.2.1",
		"grunt-concurrent": "~0.3.0",
		"grunt-gh-pages": "~0.6.0",
		"lodash-node": "~2.4.1", 
		"connect-livereload": "~0.2.0"
	};

	// Files to copy (and process).
	var files = init.filesToCopy(props);

	// Add properly-named license files.
	init.addLicenseFiles(files, props.licenses);

	// Actually copy (and process) files.
	init.copyAndProcess(files, props, { noProcess:'src/img/**' } );

	// Generate package.json file.
	init.writePackageJSON('package.json', props);

	// All done!
	done();
  });

};
