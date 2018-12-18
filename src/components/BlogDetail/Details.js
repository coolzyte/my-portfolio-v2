import React from "react";
import B15 from "../../assets/images/blog/b15.jpg";
import B1 from "../../assets/images/blog/b1.jpg";
import B2 from "../../assets/images/blog/b2.jpg";
import B12 from "../../assets/images/blog/b12.png";
import B9 from "../../assets/images/blog/b9.png";
import B10 from "../../assets/images/blog/b10.png";
import B8 from "../../assets/images/blog/b8.png";
import B16 from "../../assets/images/blog/b16.jpg";
import B11 from "../../assets/images/blog/b11.png";
import B6 from "../../assets/images/blog/b6.png";
import B7 from "../../assets/images/blog/b7.png";
import Button from "../../components/Button/Button";
import classes from "./Details.module.css";

const Details = () => {
  return (
    <div className={classes.BlogDetail}>
      <div className={classes.Container}>
        <div className={classes.Medium}>
          <img src={B15} alt="blog-img" />
          <ul className="blog__meta-box">
            <li className="blog__meta-date">
              <span>
                <i className="fa fa-calendar" aria-hidden="true" />
                oct 27, 2018
              </span>
            </li>
            <li>
              <i className="fa fa-user" aria-hidden="true" />
              By <a href="link-here"> Coolzyte</a>
            </li>
          </ul>
          <div className="m-bottom-4">
            <h3>Five Things You Didn’t Know About smith</h3>
            <p className="m-bottom-2">
              There boluptatum deleniti atque corrupti sdolores et quas
              molestias cepturi sint eca itate non similique sunt in culpa modi
              tempora incidunt obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure
            </p>

            <p>
              someone boluptatum deleniti atque corrupti sdolores et quas
              molestias cepturi sint eca itate non similique sunt in culpa modi
              tempora incidunt obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure obtain
            </p>
          </div>
          <div className={classes.Wrap}>
            <div className="item-img">
              <img src={B1} alt="blog-img" />
            </div>
            <div className="item-img">
              <img src={B2} alt="blog-img" />
            </div>
          </div>

          <div className={classes.LowerText}>
            <p className="m-bottom-2">
              someone boluptatum deleniti atque corrupti sdolores et quas
              molestias cepturi sint eca itate non similique sunt in culpa modi
              tempora incidunt obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure obtain
            </p>
            <blockquote className={classes.Blockquote}>
              <p>
                "While most companies strive to deliver seamless and issue-free
                customer service, what they often fail to understand is just how
                significantly their processes good and bad can impact their
                overall service delivery and, ultimately, how their customers
                view them."
              </p>
              <footer className={classes.BlockquoteFooter}>Devid Chory</footer>
            </blockquote>
            <p>
              There boluptatum deleniti atque corrupti sdolores et quas
              molestias cepturi sint eca itate non similique sunt in culpa modi
              tempora incidunt obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure someone
              boluptatum deleniti atque corrupti sdolores et quas molestias
              cepturi sint eca itate non
            </p>
          </div>
          <div className={classes.Author}>
            <h3>author</h3>
            <div className={classes.Comment}>
              <img src={B12} alt="blog-comment" />

              <div className="comment__desc">
                <h6>
                  <a href="link-here">Stuart Smith </a>
                </h6>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and ising pain borand I will give you a
                  complete account
                </p>
              </div>
            </div>
          </div>
          <div className={classes.SocialTags}>
            <div className={classes.Tags}>
              <ul className="flex-item mb-sm-15">
                <li className="t-list">Tags:</li>
                <li>
                  <a href="link-here">design,</a>
                </li>
                <li>
                  <a href="link-here">development,</a>
                </li>
                <li>
                  <a href="link-here">sketch</a>
                </li>
              </ul>
            </div>
            <div className={classes.BlogSocial}>
              <ul className="flex-item">
                <li className="t-list">Share:</li>
                <li>
                  <a href="link-here">Facebook,</a>
                </li>
                <li>
                  <a href="link-here">Twetter,</a>
                </li>
                <li>
                  <a href="link-here">Google+</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="blog-pagination">
            <ul className={classes.Pagination}>
              <li>
                <a href="link-here">
                  <i className="fa fa-long-arrow-left" aria-hidden="true" />
                  previous
                </a>
              </li>
              <li className="ml-auto">
                <a href="link-here">
                  next
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div className={classes.VisitorComment}>
            <h3>comments</h3>

            <div className={classes.Visitor}>
              <img src={B9} alt="comment-img" />

              <div className={classes.Description}>
                <div className={classes.Content}>
                  <div className={classes.Title}>
                    <h6>
                      <a href="link-here">robert skue</a>
                    </h6>
                    <span>08 Jun 2017</span>
                  </div>
                  <div className={classes.Reply}>
                    <a href="link-here">reply</a>
                  </div>
                </div>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and ising pain borand I will give you a
                  complete account of the system
                </p>
              </div>
            </div>

            <div className={classes.VisitorReply}>
              <img src={B10} alt="comment-img" />

              <div className={classes.Description}>
                <div className={classes.Content}>
                  <div className={classes.Title}>
                    <h6>
                      <a href="link-here">robert skue</a>
                    </h6>
                    <span>08 Jun 2017</span>
                  </div>
                  <div className={classes.Reply}>
                    <a href="link-here">reply</a>
                  </div>
                </div>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and ising pain borand I will give you a
                  complete account of the system
                </p>
              </div>
            </div>

            <div className={classes.Visitor}>
              <img src={B11} alt="comment-img" />

              <div className={classes.Description}>
                <div className={classes.Content}>
                  <div className={classes.Title}>
                    <h6>
                      <a href="link-here">robert skue</a>
                    </h6>
                    <span>08 Jun 2017</span>
                  </div>
                  <div className={classes.Reply}>
                    <a href="link-here">reply</a>
                  </div>
                </div>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and ising pain borand I will give you a
                  complete account of the system
                </p>
              </div>
            </div>
          </div>

          <div className="blog-details__contact">
            <h3 className="title">Leave A Reply</h3>

            <form>
              <div className="grid-cont">
                <div className="group p-right">
                  <input className="control" placeholder="Name" type="text" />
                </div>
                <div className="group">
                  <input className="control" placeholder="Email" type="email" />
                </div>
              </div>
              <div>
                <textarea className="control" placeholder="Message" />
              </div>
              <div>
                <Button name="Send Now" />
              </div>
            </form>
          </div>
        </div>

        <div className="grid-item-4">
          <div className="blog-details__sidebar">
            <div className="newsletter search-box">
              <div className="newsletter__box">
                <h3 className="heading heading--2">Search</h3>
                <form action="">
                  <input
                    type="text"
                    className="newsletter__input"
                    placeholder="Enter Keywords"
                    name="email"
                  />
                  <button type="submit" className="submit">
                    <i className="fa fa-paper-plane-o" />
                  </button>
                </form>
              </div>
            </div>

            <div className="categorie recent-post">
              <h3 className="sidebar-header">categories</h3>
              <ul className="list">
                <li>
                  <a href="link-here">
                    creative
                    <span>(20)</span>
                  </a>
                </li>
                <li>
                  <a href="link-here">
                    corporate
                    <span>(40)</span>
                  </a>
                </li>
                <li>
                  <a href="link-here">
                    business
                    <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a href="link-here">
                    consultancy
                    <span>(15)</span>
                  </a>
                </li>
                <li>
                  <a href="link-here">
                    technology
                    <span>(18)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="recent-post">
              <h3 className="sidebar-header">recent posts</h3>
              <div className="all-recent-post">
                <div className="single-recent-post">
                  <a href="link-here">
                    <img src={B6} alt="blog-img" />
                  </a>
                  <div className="recent-post-desc">
                    <span>20 April, 2018</span>
                    <h6>
                      <a href="link-here">
                        Liusmod tempor incididunt ut labore et dolore magn
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="single-recent-post">
                  <a href="link-here">
                    <img src={B7} alt="blog-img" />
                  </a>
                  <div className="recent-post-desc">
                    <span>18 April, 2018</span>
                    <h6>
                      <a href="link-here">
                        Modi tempora incidunt ut labore et dolore magnam{" "}
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="single-recent-post">
                  <a href="link-here">
                    <img src={B8} alt="blog-img" />
                  </a>
                  <div className="recent-post-desc">
                    <span>15 April, 2018</span>
                    <h6>
                      <a href="link-here">
                        pursue pleasure rationallye ncounter consequences{" "}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-bottom-6">
              <a href="blog-details.html">
                <img className="image" src={B16} alt="portfolio-img" />
              </a>
            </div>

            <div className="categorie recent-post">
              <h3>Tags</h3>
              <ul className="tag-list flex-item">
                <li>
                  <a href="link-here">Corporate</a>
                </li>
                <li>
                  <a href="link-here">Business</a>
                </li>
                <li>
                  <a href="link-here">Clients</a>
                </li>
                <li>
                  <a href="link-here">Ideas</a>
                </li>
                <li>
                  <a href="link-here">Creative</a>
                </li>
                <li>
                  <a href="link-here">Develop</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
