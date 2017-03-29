![RandomNoise.US Logo](http://randomnoise.us/img/randomnoise.us-twitter.png)

# RandomNoise.US

Creating noise-as-a-service, as an act of civil disobedience, that attacks the wholesale surveillance of American citizens by their ISPs.

[Follow us on twitter](https://twitter.com/RandomNoiseUS).

## Usage

Deploying RandomNoise.US is achieved simply by adding the following line to the head of your web sites:

```html
<script src="http://randomnoise.us/js/squawk.js"></script>
```

Deploying this code will cause your web site visitors to make a single request to a random IP address, for every request that you serve with the script tag, in order to add noise to the logs being kept by their ISPs.

## Things we want to do

*   Avert DDoSes (throttling requests)
*   Emulate real usage more closely:
    *   Delays with a couple of requests per page load
    *   Save the IP address in local storage to reuse over a couple of pages
*   Add HTTPS

## Contributors

Lovingly based on [Squawk](https://squawk.cc).


## License

The [RandomNoise.US website source code](https://github.com/dshafik/randomnoise.us) is mostly © 2017 [Davey Shafik](https://twitter.com/dshafik), and made available under the [GPLv3](https://github.com/dshafik/randomnoise.us/blob/master/LICENSE.md).

The [Squawk JavaScript Library](https://github.com/dshafik/randomnoise.us/blob/master/js/squawk.js) is © 2016 [Ben Dechrai](https://twitter.com/bendechrai), and made available under the [GPLv3](https://github.com/bendechrai/squawk/blob/master/LICENSE.md). 

