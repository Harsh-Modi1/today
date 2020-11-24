using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    public class ImageController : ApiController
    {
        DbonlineshoppingEntities db = new DbonlineshoppingEntities();

        public class ProductImageModel
        {
            public int ProductId { get; set; }
            public bool IsDefault { get; set; }
        }


        [HttpPost]
        //[Route("api/UploadImage")]
        public IHttpActionResult UploadImage()
        {
            var file = System.Web.HttpContext.Current.Request.Files.Count > 0 ?
        System.Web.HttpContext.Current.Request.Files[0] : null;

            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files["Image"];
            imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            postedFile.SaveAs(filePath);

            Image image = new Image();
            db.Images.Add(image);
            db.SaveChanges();

            return Ok();



        }
    }
}
