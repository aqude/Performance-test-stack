# xk6-dashboard (easy local)
[xk6-dashboard](https://github.com/grafana/xk6-dashboard)
```zsh
xk6 build --with github.com/grafana/xk6-dashboard@latest
```
```zsh
.\k6.exe --vus 10 --duration 10s run --out dashboard=report=test-report.html .\scripts\generatedata.js
```

# connect to prometheus
```zsh
k6 run --config k6-config.json script.js
```
```
http://host.docker.internal:1111
```
# connect to influxdb
```zsh
xk6 build --with github.com/grafana/xk6-output-influxdb
```
# start docker k6 script
```zsh
docker compose run k6 run /scripts/srcipt.js
```