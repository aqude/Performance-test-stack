import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

const myTrend = new Trend('request_duration');

export let options = {
    vus: 1, // Количество виртуальных пользователей
    duration: '30s', // Время теста
      thresholds: {
        http_req_duration: ["p(95) < 400", "p(90) < 500", "avg < 200"],
    }
    
};

export default function () {
    const url = 'https://api.jikan.moe/v4/top/anime';
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    };
    

    let res = http.get(url, { headers: headers });

    check(res, {
        'is status 200': (r) => r.status === 200,
    });


    sleep(.200);
}
