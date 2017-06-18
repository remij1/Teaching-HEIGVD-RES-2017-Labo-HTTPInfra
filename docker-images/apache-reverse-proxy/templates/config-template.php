<?php
    $static_app_1 = getenv('STATIC_APP_1');
    $static_app_2 = getenv('STATIC_APP_2');
    $dynamic_app_1 = getenv('DYNAMIC_APP_1');
    $dynamic_app_2 = getenv('DYNAMIC_APP_2');
?>

<VirtualHost *:80>

    <Proxy "balancer://static">
        BalancerMember "http://<?php print $static_app_1 ?>:80"
        BalancerMember "http://<?php print $static_app_2 ?>:80"
        ProxySet lbmethod=bytraffic
    </Proxy>

    <Proxy "balancer://dynamic">
        BalancerMember "http://<?php print $dynamic_app_1 ?>:3000"
        BalancerMember "http://<?php print $dynamic_app_2 ?>:3000"
        ProxySet lbmethod=bytraffic
    </Proxy>

    ServerName demo.res.ch

    ProxyPass "/api/computers/" "balancer://dynamic/"
    ProxyPassReverse "/api/computers/" "balancer://dynamic/"

    ProxyPass "/" "balancer://static/"
    ProxyPassReverse "/" "balancer://static/"
 </VirtualHost>