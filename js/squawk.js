/**
 * randomnoise.us — Noise-as-a-Service for US citizens
 *
 * This is based on squawk.cc (per notice below) with the exception
 * of not limiting to Australian IP blocks.
 */

/**
 * squawk -- Noise-as-a-service that attacks the wholesale surveillance
 * of Australian citizens under the data retention program.
 *
 * This script creates an iframe to load the random IP script, and
 * then performs the redirect on that subsequent page. It determines
 * which action to run besed on the browser's document.location.href,
 * with the intent that the referrer passed to the random IP address
 * can only be that URI.
 *
 * Copyright (C) 2016 Ben Dechrai
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

(function(){

    var Squawk = function() {
        this.squawkUrl = window.location.protocol + '//randomnoise.us/squawk.html';
    };
    Squawk.prototype.genAddress=function(){
        var ip1 = ~~(Math.random() * 253) + 1; // rand 1..254
        var ip2 = ~~(Math.random() * 253) + 1; // rand 1..254
        var ip3 = ~~(Math.random() * 253) + 1; // rand 1..254
        var ip4 = ~~(Math.random() * 253) + 1; // rand 1..254
        var ip = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
        return window.location.protocol + '//' + ip;
    };
    Squawk.prototype.iframe=function(){
        var ifr = document.createElement('iframe');
        ifr.src = this.squawkUrl;
        ifr.style.display = 'none';
        document.body.insertBefore(ifr, document.body.firstChild);
    }
    Squawk.prototype.noise=function(){
        var ajax;
        if (window.XMLHttpRequest) {
            ajax=new XMLHttpRequest();
        } else {
            ajax=new ActiveXObject("Microsoft.XMLHTTP");
        }
        ajax.onreadystatechange=function() { if (ajax.readyState >= 3 && ajax.responseText.length > 0) ajax.abort() }
        ajax.open("GET",this.genAddress());
        ajax.send();
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var x = new Squawk();
        if(document.location.href==x.squawkUrl) x.noise();
        else x.iframe();
    });

})();
