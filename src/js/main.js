import "../css/main.scss";

document.body.addEventListener( 'click', ( { target } ) => {
	const button = target.closest( 'button[aria-controls]' );		

	if ( !button ) {
		return;
	}		

	const isExpanded = button.getAttribute( 'aria-expanded' ) === 'true';
	const expandable = document.querySelector( `#${ button.getAttribute( 'aria-controls' ) }` );

	button.setAttribute( 'aria-expanded', isExpanded ? 'false' : 'true' );	
		
	if( button.classList.contains( 'header__hamburger' ) ) {
		const header = document.querySelector( '.header' );

		header.classList.toggle( 'active' );

		return;
	}

	button.classList.toggle( 'active', !isExpanded );
	expandable.classList.toggle( 'active', !isExpanded );
} );
