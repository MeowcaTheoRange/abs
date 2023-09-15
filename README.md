# Abs

abs.abtmtr.link

## How to set up

Get a MongoDB database.

Once you have that, download this code and deploy it to Vercel - connect your domain, and set these vars in `.env`:

```
MONGO_CONNECTION_STRING=[MongoDB connection string.]
MONGO_DATABASE_NAME=[The name of the MongoDB database with your collections.]

WHOAMI=[The name of your abs instance.]
WHATAMI=[The purpose of your abs instance.]
VERSION_NUMBER=abs_aradia
TOPLEVEL_DOMAIN_NAME=[Your TLD: .com, .org, .xyz, etc.]
DOMAIN_NAME=[Your domain name.]
SUBDOMAIN_NAME=[The subdomain you're setting up this abs instance on.]
```

## Add links

In your MongoDB database, create a `links` collection.
For each link, use this template:

```json
{
  "_id": {
    "$oid": //...
  },
  "name": "example", // Name of the link. For example, "example" for "domain.name/example".
  "link": "https://example.com", // Where the link goes.
  "traffic": 0 // A traffic counter. This will appear on the homepage. If you don't want this link to appear, omit this property.
}
```

Example:

```json
{
  "_id": ObjectId(...),
  "name": "example",
  "link": "https://example.com",
  "traffic": 0
}
```

Example without traffic:

```json
{
  "_id": ObjectId(...),
  "name": "example",
  "link": "https://example.com"
}
```
