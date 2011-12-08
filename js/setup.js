/**
 * Copyright (c) 2011, Danger Cove
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
(function($){
$(document).ready(function() {
  var DEBUG = false,
      oldgbar = "%0A%3Cdiv%20id%3D%22gbold%22%3E%0A%3Cdiv%20id%3D%22gboldw%22%3E%0A%20%20%3Cdiv%20id%3D%22gboldz%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22gboldtcb%22%3E%3C%2Fspan%3E%0A%20%20%20%20%3Col%20class%3D%22gboldtc%22%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%0A%20%20%20%20%20%20%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_119%22%20href%3D%22https%3A%2F%2Fplus.google.com%2Fu%2F0%2F%3Ftab%3DoX%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3E+You%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_23%22%20href%3D%22https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Dom%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3EGmail%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_24%22%20href%3D%22https%3A%2F%2Fwww.google.com%2Fcalendar%3Ftab%3Doc%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3ECalendar%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_25%22%20href%3D%22https%3A%2F%2Fdocs.google.com%2F%3Ftab%3Doo%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3EDocuments%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_31%22%20href%3D%22https%3A%2F%2Fplus.google.com%2Fu%2F0%2Fphotos%3Ftab%3Doq%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3EPhotos%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_38%22%20href%3D%22https%3A%2F%2Fsites.google.com%2F%3Ftab%3Do3%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3ESites%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldzt%22%20id%3D%22gbold_1%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Fwebhp%3Fhl%3Den%26amp%3Btab%3Dow%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22gboldts%22%3EWeb%3C%2Fspan%3E%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%20class%3D%22gboldt%22%3E%3Ca%20class%3D%22gboldgt%22%20id%3D%22gboldztm%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Foptions%2F%22%20aria-haspopup%3D%22true%22%20aria-owns%3D%22gboldd%22%3E%3Cspan%20class%3D%22gboldtb2%22%3E%3C%2Fspan%3E%3Cspan%20id%3D%22gboldztms%22%20class%3D%22gboldts%20gbtsa%22%3E%3Cspan%20id%3D%22gboldztms1%22%3EMore%3C%2Fspan%3E%3Cspan%20class%3D%22gboldma%22%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22gboldm%22%20id%3D%22gboldd%22%20aria-owner%3D%22gboldztm%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22gboldmc%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Col%20class%3D%22gboldmcc%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_999%22%20href%3D%22http%3A%2F%2Fdangercove.com%22%3EDanger%20Cove%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Cdiv%20class%3D%22gboldmt%20gboldmh%22%3E%3C%2Fdiv%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_3%22%20href%3D%22http%3A%2F%2Fgroups.google.com%2Fgrphp%3Fhl%3Den%26amp%3Btab%3Dog%22%3EGroups%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_32%22%20href%3D%22https%3A%2F%2Fwww.google.com%2Freader%2F%3Fhl%3Den%26amp%3Btab%3Doy%22%3EReader%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_36%22%20href%3D%22http%3A%2F%2Fwww.youtube.com%2F%3Ftab%3Do1%22%3EYouTube%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Cdiv%20class%3D%22gboldmt%20gboldmh%22%3E%3C%2Fdiv%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_2%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Fimghp%3Fhl%3Den%26amp%3Btab%3Doi%22%3EImages%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_12%22%20href%3D%22http%3A%2F%2Fvideo.google.com%2F%3Fhl%3Den%26amp%3Btab%3Dov%22%3EVideos%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_8%22%20href%3D%22http%3A%2F%2Fmaps.google.com%2Fmaps%3Fhl%3Den%26amp%3Btab%3Dol%22%3EMaps%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_5%22%20href%3D%22http%3A%2F%2Fnews.google.com%2Fnwshp%3Fhl%3Den%26amp%3Btab%3Don%22%3ENews%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_6%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Fprdhp%3Fhl%3Den%26amp%3Btab%3Dof%22%3EShopping%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_51%22%20href%3D%22http%3A%2F%2Ftranslate.google.com%2F%3Fhl%3Den%26amp%3Btab%3DoT%22%3ETranslate%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_10%22%20href%3D%22http%3A%2F%2Fbooks.google.com%2Fbkshp%3Fhl%3Den%26amp%3Btab%3Dop%22%3EBooks%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_9%22%20href%3D%22http%3A%2F%2Fscholar.google.com%2Fschhp%3Fhl%3Den%26amp%3Btab%3Dos%22%3EScholar%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_27%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Ffinance%3Ftab%3Doe%22%3EFinance%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20id%3D%22gbold_13%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Fblogsearch%3Fhl%3Den%26amp%3Btab%3Dob%22%3EBlogs%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Cdiv%20class%3D%22gboldmt%20gboldmh%22%3E%3C%2Fdiv%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22gboldmtc%22%3E%3Ca%20target%3D%22_blank%22%20class%3D%22gboldmt%22%20href%3D%22http%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Foptions%2F%22%3EEven%20more%20%26raquo%3B%3C%2Fa%3E%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fol%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%3C%2Fol%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%3Cdiv%20id%3D%22gboldx3%22%3E%3C%2Fdiv%3E%0A%3Cdiv%20id%3D%22gboldx4%22%3E%3C%2Fdiv%3E";
  if($('#gb').height() > 30 || $('#canvas_frame').length > 0 || DEBUG) {
    if(DEBUG) {
      $('#gb').remove();
      $('a[target="_blank"]').attr('target', '_self');
    }
    if($('#canvas_frame').length > 0) {
      if($('#canvas_frame').contents().find('#gb').height() < 31) return;
    }
    $('#gb.gbes > *, #gb.gbes > #gbw > *, #gb.gbesi > *, #gb.gbesi > #gbw > *').css('margin-top', '30px');
    $('body').prepend(unescape(oldgbar));
    $('.gboldzt, .gboldgt, .gboldmt').hover(function(e) {
      $(this).addClass($(this).attr('class') + '-hvr');
    }, function(e) {
      var $_this = $(this),
          classes = $(this).attr('class').split(/\s+/);
      $(classes).each(function(i, clss) {
        if(clss.match(/-hvr$/)){
          $_this.removeClass(clss);
        }
      });
    });
    $('.gboldgt').click(function(e) {
      var $parent = $(this).parent('li');
      $parent.hasClass('gboldto') ? $parent.removeClass('gboldto') : $parent.addClass('gboldto');
      e.preventDefault();
    });
  }
});
})(jQuery);
