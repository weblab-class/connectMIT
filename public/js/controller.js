$(function(){

	$('#myConnectionsTab').on('click', function (){
		$.ajax({
            url: '/main/my-connections',
            success: function(data) {
                window.location.assign("/main/my-connections");
            }
        });

	});

	$('#searchTab').on('click', function(){
		$.ajax({
            url: '/main/search',
            success: function(data) {
                window.location.assign("/main/search");
            }
        });
	});

	$('#exploreTab').on('click', function(){
		$.ajax({
            url: '/main/explore',
            success: function(data) {
                window.location.assign("/main/explore");
            }
        });
	});

	$('#settingsTab').on('click', function(){
		var email = $('#userEmail').text();
		email = email.substring(10);
		$.ajax({
            url: '/users/settings/' + email,
            success: function(data) {
                window.location.assign("/users/settings/" + email);
            }
        });
	});

	$('#homeTab').on('click', function(){
		$.ajax({
            url: '/main/my-connections',
            success: function(data) {
                window.location.assign("/main/my-connections");
            }
        });
	});

	$('#logoutBtn').on('click', function(){
		$.ajax({
            url: '../../users/logout',
            success: function(data) {
                window.location.assign("/");
            }
        });
	});

	$('#cancelEdits').on('click', function(){
		var email = $('#userEmail').text();
		email = email.substring(10);
		$.ajax({
            url: '/users/settings/' + email,
            success: function(data) {
                window.location.assign("/users/settings/" + email);
            }
        });
	});

    //course major picker
    $('#addAll').click(function() {
        // move all values from #allCourses to #yourCourses
        var allCourses = document.getElementById('allCourses').options;
        var yourCourses = document.getElementById('yourCourses');
        for (i = 0; i < allCourses.length; i++) {
            var option = document.createElement('option');
            option.value = allCourses[i].value;
            option.innerHTML = allCourses[i].text;
            yourCourses.appendChild(option);
        }
        $('#allCourses').find('option').remove();

    });

    $('#addSome').click(function() {
        // move selected values from #allCourses to #yourCourses
        var allCourses = document.getElementById('allCourses');
        var yourCourses = document.getElementById('yourCourses');
        for (i = 0; i < allCourses.options.length; i++) {
            var option = allCourses.options[i];
            if (option.selected) {
                var newOption = document.createElement('option');
                newOption.value = option.value;
                newOption.innerHTML = option.text;
                yourCourses.appendChild(newOption);
            }
        }
        $('#allCourses :selected').remove();
    });

    $('#removeSome').click(function() {
        // move selected values from #allCourses to #yourCourses
        var allCourses = document.getElementById('allCourses');
        var yourCourses = document.getElementById('yourCourses');
        for (i = 0; i < yourCourses.options.length; i++) {
            var option = yourCourses.options[i];
            if (option.selected) {
                var newOption = document.createElement('option');
                newOption.value = option.value;
                newOption.innerHTML = option.text;
                allCourses.appendChild(newOption);
            }
        }
        $('#yourCourses :selected').remove();
    });

    $('#removeAll').click(function() {
        // move all values from #yourCourses to #allCourses
        var allCourses = document.getElementById('allCourses');
        var yourCourses = document.getElementById('yourCourses').options;
        for (i = 0; i < yourCourses.length; i++) {
            var option = document.createElement('option');
            option.value = yourCourses[i].value;
            option.innerHTML = yourCourses[i].text;
            allCourses.appendChild(option);
        }
        $('#yourCourses').find('option').remove();
    });

    $('.moveCourse').click(function() {
        var yourCourses = document.getElementById('yourCourses');
        var concatCourses = ""
        for (i = 0; i < yourCourses.options.length; i++) {
            concatCourses += yourCourses.options[i].text + ',';
        }
        document.getElementById('selectedCourses').value = concatCourses.substring(0, concatCourses.length - 1);

        var allCourses = $('#allCourses option')
        allCourses.sort(function(a, b) {
            return a.value - b.value;
        })
        $('#allCourses').html(allCourses);

        var yourCourses = $('#yourCourses option')
        yourCourses.sort(function(a, b) {
            return a.value - b.value;
        })
        $('#yourCourses').html(yourCourses);
    });

    if ($('body').is('.editableProfile')) {
        var checkedMajors = $('#majors').text().split(',');
        var yourCourses = document.getElementById('yourCourses');
        var allCourses = document.getElementById('allCourses');
        for (i = 0; i < allCourses.options.length; i++) {
            for (j = 0; j < checkedMajors.length; j++) {
                if (allCourses.options[i].text == checkedMajors[j]) {
                    var option = document.createElement('option');
                    option.value = allCourses.options[i].value;
                    option.innerHTML = allCourses.options[i].text;
                    yourCourses.appendChild(option);
                    allCourses.options[i].selected = true;
                }
            }
        }
        $('#allCourses :selected').remove();

        var concatCourses = ""
        for (i = 0; i < yourCourses.options.length; i++) {
            concatCourses += yourCourses.options[i].text + ',';
        }
        document.getElementById('selectedCourses').value = concatCourses.substring(0, concatCourses.length - 1);
    } // end if


    if ($('body').is('.search')) {
	    var availableTags1 = [
	        '2021',
	        '2020',
	        '2019',
	        '2018',
	        '2017',
	        '2016',
	        '2015',
	        '2014',
	        '2013',
	        "2012",
	        '2011',
	        '2010',
	        '2009',
	        '2008',
	        '2007',
	        '2006',
	        '2005',
	        '2004',
	        '2003',
	        '2002',
	        '2001',
	        '2000',
	        '1999',
	        '1998',
	        '1997',
	        '1996',
	        '1995',
	        '1994',
	        '1993',
	        '1992',
	        '1991',
	        '1990',
	        '1989',
	        '1988',
	        '1987',
	        '1986',
	        '1985',
	        '1984',
	        '1983',
	        '1982',
	        '1981',
	        '1980',
	        '1979',
	        '1978',
	        '1977',
	        '1976',
	        '1975',
	        '1974',
	        '1973',
	        '1972',
	        '1971',
	        '1970',
	        '1969',
	        '1968',
	        '1967',
	        '1966',
	        '1965',
	        '1964',
	        '1963',
	        '1962',
	        '1961',
	        '1960',
	        '1959',
	        '1958',
	        '1957',
	        '1956',
	        '1955',
	        '1954',
	        '1953',
	        '1952',
	        '1951',
	        '1950',
	        '1949',
	        '1948',
	        '1947',
	        '1946',
	        '1945',
	        '1944',
	        '1943',
	        '1942',
	        '1941',
	        '1940'
	    ];
	    function split( val ) {
	      return val.split( /,\s*/ );
	    }
	    function extractLast( term ) {
	      return split( term ).pop();
	    }
	 
	    $( "#tags1" )
	      // don't navigate away from the field on tab when selecting an item
	      .on( "keydown", function( event ) {
	        if ( event.keyCode === $.ui.keyCode.TAB &&
	            $( this ).autocomplete( "instance" ).menu.active ) {
	          event.preventDefault();
	        }
	      })
	      .autocomplete({
	        minLength: 0,
	        source: function( request, response ) {
	          // delegate back to autocomplete, but extract the last term
	          response( $.ui.autocomplete.filter(
	            availableTags1, extractLast( request.term ) ) );
	        },
	        focus: function() {
	          // prevent value inserted on focus
	          return false;
	        },
	        select: function( event, ui ) {
	          var terms = split( this.value );
	          // remove the current input
	          terms.pop();
	          // add the selected item
	          terms.push( ui.item.value );
	          // add placeholder to get the comma-and-space at the end
	          terms.push( "" );
	          this.value = terms.join( ", " );
	          return false;
	        }
	      });
	}

    if ($('body').is('.search')) {
      var availableTags2 = [
        'Undecided',
        'Course 1: Civil and Environmental Engineering',
        'Course 2: Mechanical Engineering',
        'Course 3: Materials Science and Engineering',
        'Course 4: Architecture',
        'Course 5: Chemistry',
        'Course 6: Electrical Engineering and Computer Science',
        'Course 7: Biology',
        'Course 8: Physics',
        'Course 9: Brain and Cognitive Sciences',
        'Course 10: Chemical Engineering',
        'Course 11: Urban Studies and Planning',
        'Course 12: Earth, Atmospheric, and Planetary Sciences',
        'Course 14: Economics',
        'Course 15: Management',
        'Course 16: Aeronautics and Astronautics',
        'Course 17: Political Science',
        'Course 18: Mathematics',
        'Course 20: Biological Engineering',
        'Course 21: Humanities',
        'Course 21A: Anthropology',
        'Course 21H: History',
        'Course 21G: Glocal Studies and Languages',
        'Course 21L: Literature',
        'Course 21M: Music and Theater Arts',
        'Course 21W: Comparative Media Studies/Writing',
        'Course 22: Nuclear Science and Engineering',
        'Course 24: Linguistics and Philosophy'
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#tags2" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags2, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
     }


    if ($('body').is('.search')) {

      var availableTags3 = [
        'pretend there are activities'
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#tags3" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags3, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
     }

  $('#ignoreBtn').on("click", function(){
  		console.log("click")
		$.ajax({
            url: '/main/explore',
            success: function(data) {
                window.location.assign("/main/explore");
            }
        });
  });

  $('#connectBtn').on('click', function() {
    var email = $('#connectBtn').attr('class').split(" ")[2];
    $.ajax({
        url: '/users/connect/',
        email: email,
        type: 'PUT',
        success: function(data) {
            alert("connected");
        }
    });
});

});