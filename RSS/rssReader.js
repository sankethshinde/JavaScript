function RSS()
{
          var feedcontainer=document.getElementById("feed");
          var url=document.getElementById("url").value;
          var feedurl=url;
          var feedlimit=10;
          var rssoutput="<h2>Retrived RSS Data </h2><ul>";
          function rssfeedsetup()
          {
            var feedpointer=new google.feeds.Feed(feedurl)
            feedpointer.setNumEntries(feedlimit) 
            feedpointer.load(displayfeed) 
          }

          function displayfeed(result)
          {
            if (!result.error)
            {
              var thefeeds=result.feed.entries
              for (var i=0; i<thefeeds.length; i++)
              rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + thefeeds[i].description + "</a></li>"
              rssoutput+="</ul>"
              feedcontainer.innerHTML=rssoutput
            }
            else
            alert("Error fetching feeds!")
          }
          rssfeedsetup()
}
 

