---
layout: math
title: "Research"
---

<aside class="margin-math margin-math-left">
  <strong>Definition of $\kappa_0$ for a pair $(X,\mathcal B)$:</strong><br>
  $$
    \kappa_0 = \pi_*\big((K_{\pi}+\mathcal B)^{\dim X}\big)
  $$
  <hr>
  The $\kappa_0$ case is the most straightforward, as we can consider a generic fiber $(S,B)$ and identify that $\kappa_0=(K_S+B)^2$. We compute examples of families: <br> <br>

  - Let $X$ denote a normal $k$-variety and consider the map $\pi:X\to \mathrm{Spec } k$. This is the "family" parametrized by a single point. Without boundary, we have $\kappa_0=\pi_\ast (K_{X/\mathrm{Spec } k})^{\dim X}$, which identifies to $K_X^{\dim X}$. If $D$ is an identified boundary divisor, then $\kappa_0=\pi_\ast(K_{X/\mathrm{Spec }k}+D)^{\dim X}$, which is $(K_X+D)^{\dim X}$. <br>
  
  - Let $\pi:X\times Y\to Y$ denote a trivial family of $X$ parametrized by $Y$. If we ignore the boundary, then $\kappa_0=(K_{X\times Y/Y})^{\dim X}$. Now,
  
    $$
    \begin{aligned}
    K_{X\times Y/Y}& =K_{X\times Y}-\pi^\ast(K_Y)
    \\
    & =\rho^\ast(K_X)+\pi^\ast(K_Y)-\pi^\ast(K_Y)
    \\
    & =\rho^\ast(K_X).
    \end{aligned}
    $$

    Then $\kappa_0=(K_{X\times Y/Y})^{\dim X}=(\rho^\ast(K_X))^{\dim X}=K_X^{\dim X}$. <br>
    
  - Let $\pi:(X\times\mathbb P^1,\mathcal L)\to\mathbb P^1$ denote a trivial family of a smooth surface $X$ along with a universal boundary divisor $\mathcal L$. In this case, it makes sense to consider $\mathcal L$ a section to $\pi$, but we will also consider boundary where $\mathcal L$ is a fiber of $\pi$ and when $\mathcal L$ is a well-behaved diagonal. Recall, that to compute $\kappa_0$, it is sufficient for us to compute the generic fiber. If $\mathcal L=\mathcal O_{X\times\mathbb P^1}(D)$, then 
    $$
    \begin{aligned}
    \kappa_0 & =\pi_\ast((K_{X\times\mathbb P^1/\mathbb P^1}+D)^2)
    \\
     & =\pi_\ast((K_X+D)^2)
    \\
     & =\pi_\ast(K_X^2)+2\pi_\ast(K_XD)+\pi_\ast(D^2).
    \end{aligned}
    $$
    If $\mathcal L$ is a section, then these pushforwards $\pi_\ast$ don't affect the result, giving us $\kappa_0=(K_X+D)^2$. If $\mathcal L$ is a fiber, however, then $\pi_\ast(D)=\pi_\ast(D^2)=0$, so that $\kappa_0=K_X^2$. Finally, let $X=\mathbb P^2$, and $\mathcal L=\mathcal O_{X\times\mathbb P^1}(aH,bL)$ be a diagonal of type $(a,b)$, where $H$ is a hyperplane class of $\mathbb P^2$ and $L$ is a hyperplane class of $\mathbb P^1$. Then $\mathcal L=a\rho^\ast(H)+b\pi^\ast(L)$, where $\rho:\mathbb P^2\times\mathbb P^1\to\mathbb P^2$ is the projection map. Then a direct computation yields the following result:
    $$
    \begin{aligned}
    \kappa_0 & =\pi_\ast((K_{X\times\mathbb P^1/\mathbb P^1}+D)^2)
    \\ 
     & =\pi_\ast(\rho^\ast(K_{\mathbb P^2})+a\rho^\ast(H)+b\pi^\ast(L))^2
    \\
     & =\pi_\ast((a-3)\rho^\ast(H)+b\pi^\ast(L))^2.
    \end{aligned}
    $$
    Now, $\pi_\ast(\pi^\ast(L))=L$ and $L^2=0$, so we obtain $\kappa_0=(a-3)^2+2b(a-3)=(a-3)(a+2b-3)$. <br>
    
  - We extend the previous case to where $X$ is a reducible variety. Let's take $X=V(xy)\subset\mathbb P^2$, and consider the same setup $\pi:X\times\mathbb P^1\to\mathbb P^1$. Since $X$ is a complete intersection of lines $X=V(x)\cup V(y)$, we have that $K_X=(K_{\mathbb P^2}+X)|_X=(-H)|_X=-(H|_X)$. To compute the degree of $K_X$, note that $H|_X$ is the degree of $X$ in $\mathbb P^2$, and since $X$ is a degenerate conic, we get $\deg K_X=-2$. Therefore $\kappa_0=\pi_\ast(K_X)=\deg(K_X)=-2.$ <br>
  
  - Let $X=\bar Y(E_d)$ denote the moduli of marked degree $9-d\le6$ del Pezzo surfaces, and $f:Y\to X$ be the universal family. The "marked" condition gives us a boundary divisor of the sum of the lines of the surface. That is, if $S$ is a general smooth surface, then $B=\sum L_i$ is the sum of lines of $S$. We can evaluate $B^2$ to be $\ell(d)^2/d$ in a straightforward computation: 
    $$
    \begin{aligned}
    B^2 & =\left(\sum_{i=1}^{\ell(d)}L_i\right)^2
    \\
     & =\ell(d)\cdot\left(L.\sum_{i=1}^{\ell(d)}L_i \right)
    \\
     & =\ell(d)\cdot \alpha(d).
    \end{aligned}
    $$
    Where $\alpha(d)$ is fixed regardless of the choice of the line $L$. To determine $\alpha(d)$, we observe that $\sum L_i$ is some multiple of $-K_S$, in fact precisely $-\alpha(d)K_S$. Thus to extract $\alpha(d)$, we see that 
    $$
    \begin{aligned}
    \left(\sum_{i=1}^{\ell(d)}L_i\right).(-K_S) & =\alpha(d)(-K_S)^2
    \\
    \implies \ell(d) & =\alpha(d)d.
    \end{aligned}
    $$
    In particular, $\alpha(d)=\ell(d)/d$ and $B^2=\ell(d)^2/d$. Then a direct computation yields the following result:
    $$
    \begin{aligned}
    \kappa_0 & =(K_S+B)^2
    \\
     & =K_S^2+2K_SB+B^2
    \\
     & =d-2\ell(d)+\frac{\ell(d)^2}{d}.
    \end{aligned}
    $$
    For instance, for $d=4$, $\kappa_0=4-2(16)+\frac{16^2}{4}=-28+64=36$. In a table,
    \[
    \boxed{
    \begin{array}{|c||c|c|c|c|c|c|}
    \hline
    d & 6 & 5 & 4 & 3 & 2 & 1 \\
    \hline
    \ell(d) & 6 & 10 & 16 & 27 & 56 & 240 \\
    \hline
    \kappa_0(d) & 0 & 5 & 36 & 192 & 1458 & 57121 \\
    \hline
    \end{array}
    }
    \]
      
</aside>

# **Research**

My research focuses on moduli spaces of surfaces, Specially quartic del Pezzo surfaces and their weighted variants. I am currently working on κ-class computations for these moduli spaces, using KSBA-stability and explicit intersection-theoretic techniques. These del Pezzo examples are guided by the combinatorics of surface degenerations, including relationships with Weyl groups and associated graphs. I am generally motivated by settings where concrete examples illuminate how intersection theory, combinatorics, and birational geometry interact.

I am particularly interested in:

- **KSBA moduli of surfaces:** compactified moduli spaces of well-behaved surface pairs, especially del Pezzo surfaces.
- **Tautological classes on moduli spaces:** in particular the $$\kappa$$-classes, their intersection theory, and their role in the structure of the Chow ring.
- **Del Pezzo surfaces and their degenerations:** understanding how del Pezzo surfaces fit into KSBA compactifications and how their degenerations are reflected in boundary strata.

Some guiding questions for my work include:

- What can we say about the **birational geometry** of KSBA spaces of well-behaved surfaces?
- Do tautological classes such as the $$\kappa$$-classes satisfy **nice structural properties** on these moduli spaces—for instance, generating the Chow ring or enjoying functorial behavior under natural morphisms?
- When we introduce **weights** (as in Hassett’s spaces for curves, or rational weights on boundary divisors for del Pezzo surfaces of fixed degree), how do the $$\kappa$$-classes **change under wall-crossing** between chambers?

$$
\begin{aligned}
  \kappa_1 &= \pi_*\big((K_{\pi}+B)^3\big)\\
  &=\pi_*\big( K_{\pi}^3+3K_{\pi}^2B+3K_{\pi}B^2+B^3\big)\\
  &=\pi_*\big( K_{\pi}^3+3K_{\pi}^2B+3K_{\pi}B^2\big)
\end{aligned}
$$

---

## **Current Project**

### *Kappa Classes on Moduli of Stable Marked Degree 4 del Pezzo Surfaces*  
_In preparation (expected 2025)_

This project studies the tautological $$\kappa$$-classes on the moduli space of stable marked degree $$4$$ del Pezzo surfaces in the KSBA sense. The main goals are:

- to **compute the $$\kappa$$-classes** on this moduli space and show that they satisfy properties analogous to those of $$\kappa$$-classes on the moduli space of stable curves of genus zero with marked points, and  
- to show that these $$\kappa$$-classes **generate the Chow ring** (or an appropriate tautological subring) of the moduli space.

In addition, I investigate the **intersection theory** of these $$\kappa$$-classes, computing their intersections inside the Chow ring. A further direction considers **weighted** stable marked degree $$4$$ del Pezzo surfaces, in which rational weights are placed on boundary components. In this setting, I study how the $$\kappa$$-classes transform as one crosses walls in the space of weights, in analogy with wall-crossing phenomena for Hassett’s moduli spaces of weighted pointed curves.

---

## **Related Interests**

Although my primary focus is currently on the degree $$4$$ case, I am broadly interested in extending these questions to:

- other degrees of del Pezzo surfaces,
- other classes of surfaces amenable to KSBA compactifications, and
- comparisons between the behavior of $$\kappa$$-classes on moduli of surfaces and on moduli of curves.

<p align="center">
  <img src="/assets/img/group-chalkboard.JPG" alt="UGA math group" style="width:80%; border-radius:10px;">
<p/>
