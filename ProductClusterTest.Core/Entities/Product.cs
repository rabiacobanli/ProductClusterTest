using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ProductClusterTest.Core.Entities
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("price")]
        public decimal Price { get; set; }

        [BsonElement("added_at")]
        public DateTime AddedAt { get; set; } = DateTime.Now;
    }
}