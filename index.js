const refDaysValue = document.querySelector('[data-value="days"]');
const refHoursValue = document.querySelector('[data-value="hours"]');
const refminutsValue = document.querySelector('[data-value="mins"]');
const refSecondsValue = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.intervalId = null;
        this.selector = selector;
        this.targetDate =  targetDate;
        this.start(this.targetDate);
        this.initializeClock(this.selector)
    }
    
start(){
    // console.log(refSecondsValue);
    // console.log('dzfbd',this.selector);
    // console.log('khvkv',this.targetDate);

    this.intervalId = setInterval(() => {
        const deltaTime = Date.parse(this.targetDate) - Date.parse(new Date());
        const time = this.getTimeComponents(deltaTime);
        console.log(deltaTime);
        this.updateClockface(time);
      }, 1000);

    };


 getTimeComponents(time){
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        return {days, hours, mins, secs };
        };

initializeClock(selector) {
    const clock = document.querySelector(selector);
    const refDaysValue = clock.querySelector('[data-value="days"]');
    const refHoursValue = clock.querySelector('[data-value="hours"]');
    const refminutsValue = clock.querySelector('[data-value="mins"]');
    const refSecondsValue = clock.querySelector('[data-value="secs"]');
};
updateClockface({days, hours, mins, secs }) {
    if (secs < 1 && mins < 1 && hours < 1 && days < 1) {
        console.log('End Time');
        clearInterval(this.intervalId);
    }
        refDaysValue.textContent = days;
        refHoursValue.textContent = hours;
        refminutsValue.textContent = mins;
        refSecondsValue.textContent = secs;
        }
};


 new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date('Jul 17, 2022'),
        // targetDate: new Date('20:47 Jun 13, 2021'),
      });