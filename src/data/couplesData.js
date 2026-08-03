const imageUrls = [
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785738389/DSC09617_njxcpj.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785738371/DSC05960_l446jk.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737981/DSC09663_aejlus.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737979/DSC09846_xswbie.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737972/Copy_of_DSC03190_mblaal.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737946/Copy_of_DSC01047_cjsfqq.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737931/DSC05961_lnfr6c.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737909/DSC05931_bts5qb.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737900/Copy_of_DSC01563_1_rg0lmj.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737900/DSC05942_zhh9ck.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737883/Copy_of_DSC09921_k2dpgr.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737859/DSC05919_rxdwp5.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737855/DSC03379_iha0yc.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737834/DSC05874_gnmqg0.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737815/DSC03263_hktnbr.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737783/DSC03253_geqri2.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737773/DSC03160_pf1fyj.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737751/Copy_of_DSC09930_cfccws.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737728/DSC02931_dh6d1j.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737704/DSC00085_j3zxhv.jpg",
  "https://res.cloudinary.com/drlcnp9vf/image/upload/v1785737650/Copy_of_DSC03176_tf4x0b.jpg",
];

const couples = imageUrls.map((image, index) => ({
  id: index + 1,
  image,
  title: `Rishikesh Pre-Wedding Story ${index + 1}`,
}));

export default couples;
