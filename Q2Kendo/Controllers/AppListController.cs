using Microsoft.AspNetCore.Mvc;
using Q2Kendo.Models;
using System.Collections.Generic;
using System.Linq;


namespace Q2Kendo.Controllers
{
    public class AppListController : Controller
    {
        public ActionResult Index() { 
        var apps = new List<AppModel>
        {
            new AppModel {AppId= 1, AppName="Facebook", AppDetails = "Social Network", AppAvatar = "FB", AppColor = "bg-fb", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"},
            new AppModel { AppId = 2, AppName = "YouTube", AppDetails = "Video platform", AppAvatar = "YT",AppColor = "bg-yt", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" },
            new AppModel { AppId = 3, AppName = "WhatsApp", AppDetails = "Messaging app", AppAvatar = "WA",AppColor = "bg-wa", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"},
            new AppModel { AppId = 4, AppName = "Instagram", AppDetails = "Photos", AppAvatar = "IG",AppColor = "bg-ig", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"},
            new AppModel { AppId = 5, AppName = "LinkedIn", AppDetails = "Professional network", AppAvatar = "LI" , AppColor = "bg-li", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"},
            new AppModel { AppId = 6, AppName = "Spotify", AppDetails = "Music streaming", AppAvatar = "SP" , AppColor = "bg-sp", AppLogo ="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"},
            new AppModel { AppId = 7, AppName = "Twitter", AppDetails = "Microblogging", AppAvatar = "TW" , AppColor = "bg-tw", AppLogo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQIqzv3klUwYdw6gGu46ZGaLUndElkWqDwA&s"},
            new AppModel { AppId = 8, AppName = "Amazon", AppDetails = "Online store", AppAvatar = "AM" , AppColor = "bg-am", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"},
            new AppModel { AppId = 9, AppName = "Uber", AppDetails = "Transport", AppAvatar = "UB" , AppColor = "bg-ub", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"},
            new AppModel { AppId = 10, AppName = "Netflix", AppDetails = "Streaming", AppAvatar = "NF" , AppColor = "bg-nf", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"},
            new AppModel { AppId = 11, AppName = "PrimeVideo", AppDetails = "Streaming", AppAvatar = "PV" , AppColor = "bg-pv", AppLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Amazon_Prime_Video_logo_%282024%29.svg/2048px-Amazon_Prime_Video_logo_%282024%29.svg.png"}

        };

            return View(apps);
        }
    }
}
