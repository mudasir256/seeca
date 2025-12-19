import React from 'react';

function Team() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .tc-team-style1 {
          position: relative;
          padding: 150px 0;
          background-color: #fff;
          border-radius: 40px 40px 0 0;
          z-index: 10;
          margin-top: -40px;
          overflow: hidden;
        }
        .team-bg-shades {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .team-bg-shade {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .team-bg-shade-1 {
          top: 10%;
          left: 5%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.15);
        }
        .team-bg-shade-2 {
          bottom: 15%;
          right: 8%;
          width: clamp(200px, 30vw, 400px);
          height: clamp(150px, 25vh, 300px);
          background: rgba(115, 191, 68, 0.15);
        }
        .tc-team-style1 .member-colmn {
          margin: auto;
        }
        .tc-team-style1 .team-card {
          position: relative;
          margin-bottom: 40px;
          display: block;
        }
        .tc-team-style1 .team-card.team-text .img {
          border: 2px solid #fff;
          background: #fff;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tc-team-style1 .team-card.team-text .img::after {
          display: none;
        }
        .tc-team-style1 .team-card.team-text .title {
          font-weight: 400;
          color: #000 !important;
          text-align: center;
          opacity: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          text-transform: uppercase;
          position: static;
          transform: none;
          width: 100%;
        }
        .tc-team-style1 .team-card.team-text .title .con {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .tc-team-style1 .team-card.team-text .title .arrow {
          margin-top: 0;
          display: block;
          color: #73bf44;
          font-size: 24px;
        }
        .tc-team-style1 .team-card.team-text .title .arrow i {
          font-size: 24px;
        }
        .tc-team-style1 .team-card .img {
          position: relative;
          width: 100%;
          max-width: 200px;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          display: block;
          margin: auto;
          transition: all 0.3s ease;
        }
        .tc-team-style1 .team-card .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }
        .tc-team-style1 .team-card:hover .img::after {
          opacity: 0.7;
        }
        .tc-team-style1 .team-card .img::after {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(115, 191, 68, 0.85);
          opacity: 0;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .tc-team-style1 .team-card:hover .title {
          opacity: 1;
        }
        .tc-team-style1 .team-card .title {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          color: #fff;
          opacity: 0;
          text-align: center;
          width: 100%;
          transition: all 0.3s ease;
          line-height: 1.5;
          text-transform: capitalize;
          font-weight: 500;
          font-size: 16px;
          padding: 0 15px;
        }
        .tc-team-style1 .numbers {
          padding-top: 50px;
          position: relative;
          z-index: 1;
        }
        .tc-team-style1 .numbers .row {
          justify-content: center;
        }
        .tc-team-style1 .numbers .number-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid #e0e0e0;
          margin-top: 50px;
          width: 100%;
        }
        .tc-team-style1 .numbers .number-card .perc {
          font-size: 55px;
          font-weight: 600;
          line-height: 1;
          color: #73bf44;
          margin-bottom: 15px;
          text-align: center;
          width: 100%;
          display: block;
        }
        .tc-team-style1 .numbers .number-card p {
          font-size: 17px;
          color: #666;
          text-transform: capitalize;
          line-height: 1.6;
          margin: 0;
          text-align: center;
          width: 100%;
        }
        @media screen and (max-width: 991px) {
          .tc-team-style1 {
            padding: 80px 0 60px;
          }
          .tc-team-style1 .mb-80 {
            margin-bottom: 50px !important;
          }
          .tc-team-style1 .fsz-45 {
            font-size: 36px !important;
          }
          .tc-team-style1 .team-card {
            margin-bottom: 30px;
          }
          .tc-team-style1 .numbers {
            padding-top: 40px;
          }
          .tc-team-style1 .numbers .row {
            justify-content: center;
          }
          .tc-team-style1 .numbers .number-card {
            padding-top: 30px;
            margin-top: 30px;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .tc-team-style1 .numbers .number-card .perc {
            font-size: 42px;
            margin-bottom: 12px;
            text-align: center;
            width: 100%;
            display: block;
          }
          .tc-team-style1 .numbers .number-card p {
            font-size: 16px;
            text-align: center;
            width: 100%;
          }
        }
        @media screen and (max-width: 767px) {
          .tc-team-style1 {
            padding: 60px 0 50px;
            border-radius: 30px 30px 0 0;
          }
          .tc-team-style1 .mb-80 {
            margin-bottom: 40px !important;
          }
          .tc-team-style1 .fsz-45 {
            font-size: 32px !important;
          }
          .tc-team-style1 .members .row > div {
            margin-bottom: 20px;
          }
          .tc-team-style1 .team-card {
            margin-bottom: 20px;
          }
          .tc-team-style1 .team-card .img {
            max-width: 140px;
          }
          .tc-team-style1 .team-card.team-text .img {
            max-width: 140px;
            min-height: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tc-team-style1 .team-card.team-text .title {
            font-size: 13px;
            position: static;
            transform: none;
            opacity: 1;
          }
          .tc-team-style1 .team-card.team-text .title .con {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
          }
          .tc-team-style1 .team-card.team-text .title .arrow {
            margin-top: 0;
            font-size: 20px;
          }
          .tc-team-style1 .numbers {
            padding-top: 30px;
          }
          .tc-team-style1 .numbers .row {
            justify-content: center;
          }
          .tc-team-style1 .numbers .row > div {
            display: flex;
            justify-content: center;
          }
          .tc-team-style1 .numbers .number-card {
            padding-top: 25px;
            margin-top: 25px;
            border-top: 1px solid #e0e0e0;
            align-items: center;
            text-align: center;
            max-width: 100%;
          }
          .tc-team-style1 .numbers .number-card .perc {
            font-size: 38px;
            margin-bottom: 12px;
            text-align: center;
            width: 100%;
            display: block;
          }
          .tc-team-style1 .numbers .number-card p {
            font-size: 15px;
            text-align: center;
            width: 100%;
          }
        }
        @media screen and (max-width: 575px) {
          .tc-team-style1 {
            padding: 50px 0 40px;
          }
          .tc-team-style1 .mb-80 {
            margin-bottom: 35px !important;
          }
          .tc-team-style1 .fsz-45 {
            font-size: 28px !important;
          }
          .tc-team-style1 .team-card {
            margin-bottom: 15px;
          }
          .tc-team-style1 .team-card .img {
            max-width: 120px;
          }
          .tc-team-style1 .team-card.team-text .img {
            max-width: 120px;
            min-height: 120px;
          }
          .tc-team-style1 .team-card.team-text .title {
            font-size: 11px;
          }
          .tc-team-style1 .team-card.team-text .title .con {
            gap: 6px;
          }
          .tc-team-style1 .team-card.team-text .title .arrow {
            margin-top: 0;
            font-size: 18px;
          }
          .tc-team-style1 .team-card.team-text .title .arrow i {
            font-size: 18px;
          }
          .tc-team-style1 .numbers .row {
            justify-content: center;
          }
          .tc-team-style1 .numbers .row > div {
            display: flex;
            justify-content: center;
          }
          .tc-team-style1 .numbers .number-card {
            padding-top: 20px;
            margin-top: 20px;
            align-items: center;
            text-align: center;
          }
          .tc-team-style1 .numbers .number-card .perc {
            font-size: 32px;
            margin-bottom: 10px;
            text-align: center;
            width: 100%;
            display: block;
          }
          .tc-team-style1 .numbers .number-card p {
            font-size: 14px;
            text-align: center;
            width: 100%;
          }
        }
      `}} />
      <section className="tc-team-style1">
        <div className="team-bg-shades">
          <div className="team-bg-shade team-bg-shade-1 d-none d-md-block"></div>
          <div className="team-bg-shade team-bg-shade-2 d-none d-md-block"></div>
        </div>
        <div className="container">
          <div className="mb-80 js-splittext-lines">
            <h2 className="fsz-45"> Meet our top-notch experts </h2>
          </div>
        <div className="members">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="member-colmn">
                <a href="#" className="team-card wow zoomIn">
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team1.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
                <a
                  href="#"
                  className="team-card wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team2.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              <div className="member-colmn">
                <a
                  href="#"
                  className="team-card wow zoomIn"
                  data-wow-delay="0.2s"
                >
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team3.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="member-colmn">
                <a
                  href="#"
                  className="team-card wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team4.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
                <a
                  href="#"
                  className="team-card wow zoomIn"
                  data-wow-delay="0.4s"
                >
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team5.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 order-last order-lg-0">
              <div className="member-colmn">
                <a
                  href="#"
                  className="team-card wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team6.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
                <a
                  href="#"
                  className="team-card team-text wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="img">
                    <h5 className="title">
                      {' '}
                      <div className="con">
                        {' '}
                        <span>
                          {' '}
                          See All Our <br /> Member{' '}
                        </span>{' '}
                        <span className="arrow">
                          {' '}
                          <i className="ti-arrow-top-right"></i>{' '}
                        </span>{' '}
                      </div>{' '}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="member-colmn">
                <a
                  href="#"
                  className="team-card wow zoomIn"
                  data-wow-delay="0.7s"
                >
                  <div className="img">
                    <img
                      src="/home1/assets/img/team/team7.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <h5 className="title">
                    {' '}
                    jhon <br /> handerson{' '}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="numbers">
          <div className="row gx-5">
            <div className="col-6 col-md-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="perc"> 95% </h3>
                <p>
                  {' '}
                  Happy Customer and <br /> Repeating{' '}
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="perc"> 126 </h3>
                <p>
                  {' '}
                  Projects Completed in <br /> 15 Years{' '}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="number-card wow fadeInUp" data-wow-delay="0.6s">
                <h3 className="perc"> 25 </h3>
                <p>
                  {' '}
                  Architects and <br /> High Qualified Crafters{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Team;
