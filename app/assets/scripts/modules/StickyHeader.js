import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
    constructor() {
        this.siteHeader = $( '.site-header' );
        this.headerTriggerElement = $( '.large-hero__title' );
        this.createHeaderWaypoint();
        this.pageSections = $( '.page-section' );
        this.headerLinks = $( '.primary-nav a' );
        this.createPageSectionWayPoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        let that = this;
        new Waypoint( {
            element : that.headerTriggerElement[ 0 ],
            handler : function( direction ) {
                if( direction == "down" ) {
                    that.siteHeader.addClass( "site-header--dark" );
                }
                else {
                    that.siteHeader.removeClass( "site-header--dark" );
                }
            }
        } )
    }

    createPageSectionWayPoints() {
        let that = this;
        this.pageSections.each( function() {
            let currentPageSection = this;
            new Waypoint( {
                element : currentPageSection,
                handler : function( direction ) {
                    if( direction == "down" ) {
                        that.headerLinks.removeClass( "is-current-link" );
                        let matchingHeaderLink = currentPageSection.getAttribute( "data-matching-link" );
                        $( matchingHeaderLink ).addClass( "is-current-link" );
                    }
                },
                offset  : "18%"
            } );
            new Waypoint( {
                element : currentPageSection,
                handler : function( direction ) {
                    if( direction == "up" ) {
                        that.headerLinks.removeClass( "is-current-link" );
                        let matchingHeaderLink = currentPageSection.getAttribute( "data-matching-link" );
                        $( matchingHeaderLink ).addClass( "is-current-link" );
                    }
                },
                offset  : "-40%"
            } );
        } );
    }
}

export default StickyHeader;