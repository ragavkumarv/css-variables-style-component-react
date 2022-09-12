The style control is given to parent component (Wrapper)

I have also made some pre-baked ones with

1. primary
2. secondary
3. fun

Using the power of CSS variables easy to setup

1. Setup variables with fallback
   1. Since the parent can easily overide
2. pre-baked is stronger hence that will be taken

Problem

1. What if I want overide with primary, secondary etc from the parent
2. Then I have to define them in the parent also
3. But to how to connect `<Button primary ></Button>` with Wrapper
4. Somehow Wrapper showed know the Button down is primary

Soln

1.  --btn-style-1, --btn-style-2, --btn-style-3 variables in Wrapper

2.  match each --btn-style-x to primary, secondary & fun. So that it could be overidden from parent

3.  Now diffrent parent can have different primary, secondary, fun button - Truly contextualized buttons

4.  Button is like, it adpats to its container (pun intended)
