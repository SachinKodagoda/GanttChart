import styles from "./page.module.css";

export default function Home() {
  const numberOfDays = 31;
  const fixWidth = 60;
  const fullWidth = numberOfDays * fixWidth;
  const dates = new Array(31).fill(0).map((_, i) => i + 1);
  const barHeight = 30;
  const barMargins = 40;

  const monthData = {
    "widget_3--1": [
      {
        adSlotName: "HB - Position 1",
        startDate: "2023-05-04T03:53:19",
        endDate: "2023-05-19T03:53:19",
        start: 4,
        width: 5,
        background: "#F0F2F7",
        color: "#2F53AE",
      },
      {
        adSlotName: "HB - Position 1",
        startDate: "2023-05-04T03:53:19",
        endDate: "2023-05-19T03:53:19",
        start: 6,
        width: 8,
        background: "#FFEBC8",
        color: "#8F671F",
      },
      {
        adSlotName: "HB - Position 1",
        startDate: "2023-05-04T03:53:19",
        endDate: "2023-05-19T03:53:19",
        start: 6,
        width: 6,
        background: "#EFFFE8",
        color: "#54AB2E",
      },
    ],
    "widget_3--2": [
      {
        adSlotName: "HB - Position 1",
        startDate: "2023-05-04T03:53:19",
        endDate: "2023-05-19T03:53:19",
        start: 6,
        width: 3,
        background: "#F0F2F7",
        color: "#2F53AE",
      },
      {
        adSlotName: "HB - Position 1",
        startDate: "2023-05-04T03:53:19",
        endDate: "2023-05-19T03:53:19",
        start: 1,
        width: 5,
        background: "#F0F2F7",
        color: "#2F53AE",
      },
      {
        adSlotName: "HB - Position 1",
        startDate: "2023-05-04T03:53:19",
        endDate: "2023-05-19T03:53:19",
        start: 6,
        width: 4,
        background: "#F0F2F7",
        color: "#2F53AE",
      },
    ],
  };

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.leftTop}></div>
        <div className={styles.leftSecond}></div>
        <div className={styles.leftThird}>
          {Object.entries(monthData).map(([key, value]) => (
            <div
              className={styles.leftSecondGroup}
              key={`group-${key}`}
              style={{ height: `${barHeight * value.length + barMargins}px` }}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.topLeft}>January, 2023</div>
          <div className={styles.topRight}>
            <div className={styles.topRightItem}>
              <div
                className={styles.topRightItemColor}
                style={{ background: "#E9EFFF", borderColor: "#2F53AE" }}
              ></div>
              <div
                className={styles.topRightItemDescription}
                style={{ color: "#2F53AE" }}
              >
                Currently Booking
              </div>
            </div>
            <div className={styles.topRightItem}>
              <div
                className={styles.topRightItemColor}
                style={{ background: "#FFEBC8", borderColor: "#8F671F" }}
              ></div>
              <div
                className={styles.topRightItemDescription}
                style={{ color: "#8F671F" }}
              >
                Tentative
              </div>
            </div>
            <div className={styles.topRightItem}>
              <div
                className={styles.topRightItemColor}
                style={{ background: "#EFFFE8", borderColor: "#54AB2E" }}
              ></div>
              <div
                className={styles.topRightItemDescription}
                style={{ color: "#54AB2E" }}
              >
                Confirmed
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calendarCtr}>
          <div className={styles.grid} style={{ width: `${fullWidth}px` }}>
            {dates.map((_, i) => (
              <div
                className={styles.gridLines}
                key={`lines-${i + 1}`}
                style={{ left: `${fixWidth * i}px` }}
              ></div>
            ))}
            {/* {Object.entries(monthData).map(([key, value]) => (
              <>
                {value.map((item, i) => (
                  <div
                    className={styles.horizontalLines}
                    key={`lines-${i + 1}`}
                    style={{
                      top: `${barHeight * i + barMargins}px`,
                    }}
                  ></div>
                ))}
              </>
            ))} */}
          </div>
          <div className={styles.calendar} style={{ width: `${fullWidth}px` }}>
            {dates.map((date, i) => (
              <div
                className={styles.dateBox}
                key={`date-${i + 1}`}
                style={{ width: `${fixWidth}px`, height: `${fixWidth}px` }}
              >
                {date}
              </div>
            ))}
          </div>
          {Object.entries(monthData).map(([key, value]) => (
            <div
              className={styles.calenderGroup}
              key={`group-${key}`}
              style={{ height: `${barHeight * value.length + barMargins}px` }}
            >
              {value.map((item, i) => (
                <div
                  className={styles.calenderItem}
                  key={`group-${i}`}
                  style={{
                    height: `${barHeight}px`,
                    left: `${fixWidth * item.start}px`,
                    width: `${fixWidth * item.width}px`,
                    background: `${item.background}`,
                    color: `${item.color}`,
                  }}
                >
                  {item.adSlotName}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
