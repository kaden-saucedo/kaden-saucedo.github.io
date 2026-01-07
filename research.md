---
layout: math
title: "Research"
---

<!-- <aside class="margin-math margin-math-left">
  <strong>Definition of \(\kappa_0\) for a family \(\pi:(X,\mathcal B)\rightarrow Y\):</strong><br>
  $$
    \kappa_0 = \pi_*\big((K_{\pi}+\mathcal B)^{\dim X}\big)
  $$
  <hr>
  The \(\kappa_0\) case is the most straightforward, as we can consider a generic fiber \((S,B)\) and identify that \(\kappa_0=(K_S+B)^2\). We compute examples of families: <br> <br>

  - Let \(X\) denote a normal \(k\)-variety and consider the map \(\pi:X\to \mathrm{Spec} k\). This is the "family" parametrized by a single point. Without boundary, we have \(\kappa_0=\pi_\ast (K_{X/\mathrm{Spec } k})^{\dim X}\), which identifies to \(K_X^{\dim X}\). If \(D\) is an identified boundary divisor, then \(\kappa_0=\pi_\ast(K_{X/\mathrm{Spec }k}+D)^{\dim X}\), which is \((K_X+D)^{\dim X}\). <br>
  
  - Let \(\pi:X\times Y\to Y\) denote a trivial family of \(X\) parametrized by \(Y\). If we ignore the boundary, then \(\kappa_0=(K_{X\times Y/Y})^{\dim X}\). Now,
  
    $$
    \begin{aligned}
    K_{X\times Y/Y}& =K_{X\times Y}-\pi^\ast(K_Y)
    \\
    & =\rho^\ast(K_X)+\pi^\ast(K_Y)-\pi^\ast(K_Y)
    \\
    & =\rho^\ast(K_X).
    \end{aligned}
    $$

    Then \(\kappa_0=(K_{X\times Y/Y})^{\dim X}=(\rho^\ast(K_X))^{\dim X}=K_X^{\dim X}\). <br>
    
  - Let \(\pi:(X\times\mathbb P^1,\mathcal L)\to\mathbb P^1\) denote a trivial family of a smooth surface \(X\) along with a universal boundary divisor \(\mathcal L\). In this case, it makes sense to consider \(\mathcal L\) a section to \(\pi\), but we will also consider boundary where \(\mathcal L\) is a fiber of \(\pi\) and when \(\mathcal L\) is a well-behaved diagonal. Recall, that to compute \(\kappa_0\), it is sufficient for us to compute the generic fiber. If \(\mathcal L=\mathcal O_{X\times\mathbb P^1}(D)\), then 
    $$
    \begin{aligned}
    \kappa_0 & =\pi_\ast((K_{X\times\mathbb P^1/\mathbb P^1}+D)^2)
    \\
     & =\pi_\ast((K_X+D)^2)
    \\
     & =\pi_\ast(K_X^2)+2\pi_\ast(K_XD)+\pi_\ast(D^2).
    \end{aligned}
    $$
    If \(\mathcal L\) is a section, then these pushforwards \(\pi_\ast\) don't affect the result, giving us \(\kappa_0=(K_X+D)^2\). If \(\mathcal L\) is a fiber, however, then \(\pi_\ast(D)=\pi_\ast(D^2)=0\), so that \(\kappa_0=K_X^2\). Finally, let \(X=\mathbb P^2\), and \(\mathcal L=\mathcal O_{X\times\mathbb P^1}(aH,bL)\) be a diagonal of type \((a,b)\), where \(H\) is a hyperplane class of \(\mathbb P^2\) and \(L\) is a hyperplane class of \(\mathbb P^1\). Then \(\mathcal L=a\rho^\ast(H)+b\pi^\ast(L)\), where \(\rho:\mathbb P^2\times\mathbb P^1\to\mathbb P^2\) is the projection map. Then a direct computation yields the following result:
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
    
  - We extend the previous case to where \(X\) is a reducible variety. Let's take \(X=V(xy)\subset\mathbb P^2\), and consider the same setup $\pi:X\times\mathbb P^1\to\mathbb P^1$. Since $X$ is a complete intersection of lines $X=V(x)\cup V(y)$, we have that $K_X=(K_{\mathbb P^2}+X)|_X=(-H)|_X=-(H|_X)$. To compute the degree of $K_X$, note that $H|_X$ is the degree of $X$ in $\mathbb P^2$, and since $X$ is a degenerate conic, we get $\deg K_X=-2$. Therefore $\kappa_0=\pi_\ast(K_X)=\deg(K_X)=-2.$ <br>
  
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

<aside class="margin-math margin-math-right">
  <strong>del Pezzo Surfaces:</strong>
  <br>
  <hr>
  <figure class="margin-figure petersen">
  <svg
    viewBox="0 0 200 200"
    width="100%"
    height="auto"
    role="img"
    aria-label="Petersen graph (incidence graph of the ten lines on a smooth quintic del Pezzo surface)"
  >
    <!-- edges -->
    <g fill="none" stroke="currentColor" stroke-width="2.2" vector-effect="non-scaling-stroke">

      <!-- outer pentagon (radius 80, center (100,100)) -->
      <line x1="100.000" y1="20.000"  x2="176.085" y2="75.279" />
      <line x1="176.085" y1="75.279" x2="147.023" y2="164.721" />
      <line x1="147.023" y1="164.721" x2="52.977"  y2="164.721" />
      <line x1="52.977"  y1="164.721" x2="23.915"  y2="75.279" />
      <line x1="23.915"  y1="75.279" x2="100.000" y2="20.000" />

      <!-- inner pentagram vertices are COLLINEAR with the outer vertices (radius 35) -->
      <!-- connect i -> i+2 (mod 5): 0-2, 2-4, 4-1, 1-3, 3-0 -->
      <line x1="100.000" y1="65.000"  x2="120.572" y2="128.316" />
      <line x1="120.572" y1="128.316" x2="66.713"  y2="89.184" />
      <line x1="66.713"  y1="89.184"  x2="133.287" y2="89.184" />
      <line x1="133.287" y1="89.184"  x2="79.428"  y2="128.316" />
      <line x1="79.428"  y1="128.316" x2="100.000" y2="65.000" />

      <!-- spokes: outer k -> inner k (collinear through the center) -->
      <line x1="100.000" y1="20.000"  x2="100.000" y2="65.000" />
      <line x1="176.085" y1="75.279" x2="133.287" y2="89.184" />
      <line x1="147.023" y1="164.721" x2="120.572" y2="128.316" />
      <line x1="52.977"  y1="164.721" x2="79.428"  y2="128.316" />
      <line x1="23.915"  y1="75.279" x2="66.713"  y2="89.184" />
    </g>

    <!-- vertices -->
    <g fill="currentColor">
      <!-- outer -->
      <circle cx="100.000" cy="20.000"  r="3.2" />
      <circle cx="176.085" cy="75.279" r="3.2" />
      <circle cx="147.023" cy="164.721" r="3.2" />
      <circle cx="52.977"  cy="164.721" r="3.2" />
      <circle cx="23.915"  cy="75.279"  r="3.2" />
      <!-- inner -->
      <circle cx="100.000" cy="65.000"  r="3.2" />
      <circle cx="133.287" cy="89.184" r="3.2" />
      <circle cx="120.572" cy="128.316" r="3.2" />
      <circle cx="79.428"  cy="128.316" r="3.2" />
      <circle cx="66.713"  cy="89.184"  r="3.2" />
    </g>
  </svg>

  <figcaption class="margin-caption">
    Incidence graph of the ten lines on a smooth quintic del Pezzo surface (the Petersen graph).
  </figcaption>
</figure>

</aside> -->

# **Research**

My research focuses on moduli spaces of surfaces, especially del Pezzo surfaces and their weighted variants. I am currently working on $$\kappa$$-class computations for these moduli spaces, using KSBA-stability and explicit intersection-theoretic techniques. These del Pezzo examples are guided by the combinatorics of surface degenerations, including relationships with Weyl groups and associated graphs. I am generally motivated by settings where concrete examples illuminate how intersection theory, combinatorics, and birational geometry interact.

I am particularly interested in:

- **KSBA moduli of surfaces:** compactified moduli spaces of well-behaved surface pairs, especially marked del Pezzo surfaces.
- **Tautological classes on moduli spaces:** in particular the $$\kappa$$-classes, their intersection theory, and their role in the structure of the Chow ring.
- **Del Pezzo surfaces and their degenerations:** understanding how del Pezzo surfaces fit into KSBA compactifications and how their degenerations are reflected in boundary strata.

Some guiding questions for my work include:

- What can we say about the **birational geometry** of KSBA spaces of well-behaved surfaces?
- Do tautological classes such as the $$\kappa$$-classes satisfy **nice structural properties** on these moduli spaces—for instance, generating the Chow ring or enjoying functorial behavior under natural morphisms?
- When we introduce **weights** (as in Hassett’s spaces for curves, or rational weights on boundary divisors for del Pezzo surfaces of fixed degree), how do the $$\kappa$$-classes **change under wall-crossing** between chambers?

---

## **Current Project**

### *Kappa Classes on Moduli of Stable Marked Degree 4 del Pezzo Surfaces*  
_In preparation (expected 2026)_

This project studies the $$\kappa$$-classes on the moduli space of stable marked degree $$4$$ del Pezzo surfaces in the KSBA sense. The main goals are:

- to **compute the $$\kappa$$-classes** on this moduli space and determine if they satisfy properties analogous to those of $$\kappa$$-classes on the moduli space of stable curves of genus zero with marked points, and  
- to determine what these $$\kappa$$-classes **generate in the Chow ring** of the moduli space.

In addition, I investigate the **intersection theory** of these $$\kappa$$-classes, computing their intersections inside the Chow ring. A further direction considers **weighted** stable marked degree $$4$$ del Pezzo surfaces, in which rational weights are placed on boundary components. In this setting, I study how the $$\kappa$$-classes transform as one crosses walls in the space of weights, in analogy with wall-crossing phenomena for Hassett’s moduli spaces of weighted pointed curves.

---

## **Related Interests**

Although my primary focus is currently on the degree $$4$$ case, I am broadly interested in extending these questions to:

- other degrees of del Pezzo surfaces,
- other classes of surfaces amenable to KSBA compactifications,
- comparisons between the behavior of $$\kappa$$-classes on moduli of surfaces and on moduli of curves, and
- finding an appropriate analogue to $$\psi$$-classes on moduli of marked curves to the moduli of surfaces.

<p align="center">
  <img src="/assets/img/group-chalkboard.JPG" alt="UGA math group" style="width:80%; border-radius:10px;">
<p/>
