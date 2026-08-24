<script>
    // function getTRandomNumber(df) {
    //     var z1 = Math.random() * 2 - 1; // uniform(-1, 1)
    //     var z2 = Math.random() * 2 - 1; // uniform(-1, 1)
    //     var s = z1 * z1 + z2 * z2;
    //     while (s === 0 || s > 1) {
    //       z1 = Math.random() * 2 - 1; // uniform(-1, 1)
    //       z2 = Math.random() * 2 - 1; // uniform(-1, 1)
    //       s = z1 * z1 + z2 * z2;
    //     }
    //     var t = z1 * Math.sqrt(df * (s / (1 - s)));
    //
    //     return t;
    //   }
    export let icon = "caravela";
    export let size = 4;
    export let shadow = false;
    /** Opened from outside — the pile and the manifest row share one hover state. */
    export let open = false;
    import Icon from "./Icon.svelte";

    function getNormal(mean = 0, standardDeviation = 1) {
        let u1 = 0,
            u2 = 0; //uniform random numbers
        //To get samples from a normal distribution
        //we use the Box-Muller Transformation
        while (u1 === 0) u1 = Math.random(); //Use the center method
        while (u2 === 0) u2 = Math.random();
        const z0 =
            Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        //Compute the random number from the normal distribution
        return z0 * standardDeviation + mean;
    }
    function random_bimodal(df, center) {
        var randomVariable = getNormal(center, df);
        // Decide whether to multiply by -1 with 50% probability
        const shouldMultiplyByNegativeOne = Math.random() < 0.5;
        // Apply the multiplication if needed
        const result = shouldMultiplyByNegativeOne
            ? -1 * randomVariable
            : randomVariable;
        return result;
    }
    function lerpSize(value) {
        if (value < 0 || value > 1) {
            return 4;
        }
        return value * (4.5 - 3) + 3.5;
    }
</script>

<div class="package">
    <div id="logo" class:open style="--size: {lerpSize(size)}rem">
        <div
            class="box"
            style="--random:{random_bimodal(6, 20)}; --normal:{getNormal(
                0,
                1,
            )};"
        >
            <div class="side front">
                <div class="project-icon">
                    <Icon
                        name={icon}
                        color={"#1c2329"}
                        opacity={1}
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
            </div>
            <div class="side left"></div>
            <div class="side back"></div>
            <div class="side right"></div>
            <div class="side bottom" class:shadow></div>
            <div class="flap front"></div>
            <div class="flap back"></div>
            <div class="flap left"></div>
            <div class="flap right"></div>
        </div>
    </div>
</div>

<style>
    .package {
        --box-light: #d8b38d;
        --box-mid: #c6a07a;
        --box-inner-mid: #b78e6a;
        --box-dark: #a87d5b;
        --box-inner-dark: #9a6c4d;
        --box-inner-darkest: #8c5c40;
    }

    .package #logo {
        --size: 4rem;
        width: var(--size);
        height: var(--size);
        perspective: 150rem;
        cursor: pointer;
        /* position:absolute; */
        /* bottom:0; */
        /* right:0; */
    }
    .project-icon {
        display: grid;
        place-items: center;
        padding: 0.5rem;
    }
    .package #logo .box {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: translateX(calc(var(--normal) * 0.2rem)) translateZ(-20rem)
            rotatex(-15deg) rotatey(calc(var(--random) * 1deg));
        font-size: 1rem;
        color: var(--surfaces);
        text-align: center;
        transition: all 0.75s ease-out;
    }
    .package #logo .box > * {
        position: absolute;
        background: #0008;
        transition: 0.5s;
    }
    .package #logo .box .side.front,
    body #logo .box .side.left,
    body #logo .box .side.back,
    body #logo .box .side.right {
        width: var(--size);
        height: calc(var(--size) * 0.95);
        transform: translateY(calc(var(--size) * 0.25))
            rotateY(var(--angle, 0deg)) translateZ(calc(var(--size) * 0.5));
    }
    .package #logo .box .side.front {
        background: var(--box-mid);
    }
    .package #logo .box .side.right {
        --angle: 90deg;
        background: var(--box-inner-mid);
    }
    .package #logo .box .side.back {
        --angle: 180deg;
        background: var(--box-inner-dark);
    }
    .package #logo .box .side.left {
        --angle: -90deg;
        background: var(--box-dark);
    }
    .package #logo .box .side.bottom {
        width: var(--size);
        height: var(--size);
        transform: translateY(calc(var(--size) * 0.25)) rotateX(90deg)
            translateZ(calc(var(--size) * -0.45));
        background: var(--box-inner-darkest);
    }
    .shadow {
        box-shadow: 25px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }
    .package #logo .box .flap {
        background: var(--box-light);
    }
    .package #logo .box .flap.front,
    body #logo .box .flap.back {
        width: var(--size);
        height: calc(var(--size) * 0.5);
    }
    .package #logo .box .flap.left,
    body #logo .box .flap.right {
        width: calc(var(--size) * 0.5);
        height: var(--size);
    }
    .package #logo .box .flap.front {
        transform-origin: 50% 100% calc(var(--size) * 0.5);
        transform: translateY(calc(var(--size) * -0.25)) rotateX(90deg)
            translateZ(calc(var(--size) * 0.499));
    }
    .package #logo .box .flap.back {
        transform-origin: 50% 100% calc(var(--size) * -0.5);
        transform: translateY(calc(var(--size) * -0.25)) rotateX(-90deg)
            translateZ(calc(var(--size) * -0.499));
    }
    .package #logo .box .flap.left {
        transform-origin: 0 50% 0;
        transform: translateY(calc(var(--size) * -0.25)) rotateX(90deg)
            rotateY(0deg);
    }
    .package #logo .box .flap.right {
        transform-origin: 0 50% 0;
        transform: translateX(var(--size)) translateY(calc(var(--size) * -0.25))
            rotateX(90deg) rotateY(180deg);
    }
    .package #logo:not(.open) .box .flap.left,
    body #logo:not(.open) .box .flap.right {
        transition-delay: 0.2s;
    }
    .package #logo.open .box {
        transform: translateZ(-25rem) rotatex(-20deg) rotatey(-30deg);
    }
    .package #logo.open .box .flap {
        background: var(--box-inner-mid);
    }
    .package #logo.open .box .flap.front,
    body #logo.open .box .flap.back {
        transition-delay: 0.2s;
    }
    .package #logo.open .box .flap.front {
        transform: translateY(calc(var(--size) * -0.25)) rotateX(-120deg)
            translateZ(calc(var(--size) * 0.499));
    }
    .package #logo.open .box .flap.back {
        transform: translateY(calc(var(--size) * -0.25)) rotateX(120deg)
            translateZ(calc(var(--size) * -0.499));
    }
    .package #logo.open .box .flap.left {
        transform: translateY(calc(var(--size) * -0.25)) rotateX(90deg)
            rotateY(-210deg);
    }
    .package #logo.open .box .flap.right {
        transform: translateX(var(--size)) translateY(calc(var(--size) * -0.25))
            rotateX(90deg) rotateY(380deg);
    }
</style>
