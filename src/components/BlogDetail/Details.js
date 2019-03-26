import React from "react";
import B15 from "../../assets/images/blogPic/b15.jpg";
import B1 from "../../assets/images/blogPic/b1.jpg";
import B2 from "../../assets/images/blogPic/b2.jpg";
import B12 from "../../assets/images/blogPic/b12.png";
import B9 from "../../assets/images/blogPic/b9.png";
import B10 from "../../assets/images/blogPic/b10.png";
import B11 from "../../assets/images/blogPic/b11.png";
import Button from "../../components/Button/Button";
import MetaBox from "../blog/MetaBox";
import classes from "./Details.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Details = () => {
  return (
    <div className={classes.BlogDetail}>
      <div className={classes.Container}>
        <div className={classes.Medium}>
          <img src={B15} alt="blog-img" />
          <MetaBox />
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

          <div className={classes.Contact}>
            <h3>Leave A Reply</h3>

            <form>
              <div className={classes.GridContainer}>
                <div className={classes.Group}>
                  <input placeholder="Name" type="text" />
                </div>
                <div className={classes.Group}>
                  <input placeholder="Email" type="email" />
                </div>
              </div>

              <textarea placeholder="Message" />

              <div>
                <Button name="Send Now" />
              </div>
            </form>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Details;
