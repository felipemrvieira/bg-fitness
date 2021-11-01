import React from "react";
// import Link from "next/link";
import Image from "next/image";

import testimonials from "./testimonials.module.scss";
import Avatar from "./img/avatar.jpeg";

const Testimonials: React.FC = () => {
  return (
    <section className={testimonials.sectionContainer}>
      <div className={testimonials.sectionContent}>
        <div className={testimonials.testimonialsHeader}>
          <span>Depoimentos</span>
          <p>O que nossos clientes dizem sobre nós</p>
        </div>
        <div className={testimonials.testimonials}>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quod quaerat, et explicabo unde, itaque sequi
              perferendis alias asperiores nulla non. Ipsa maiores molestiae
              corrupti doloremque modi tempore dolorem qui.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={Avatar}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Felipe Maciel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
