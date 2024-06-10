using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;
using Data;

namespace RankingApp.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemController: ControllerBase
{
    [HttpGet("{itemType:int}")]
    public ItemModel[] Get(int itemType)
    {
        // to simulate fetching data/network delay
        System.Threading.Thread.Sleep(2000);
        return ItemData.Get(itemType);
    }
}