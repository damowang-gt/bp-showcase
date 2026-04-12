let walletConnected = false;
let walletAddress = '';
let walletBalance = 0;

// Modal Logic
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Event Listeners for Modals
document.getElementById('btnConnectWallet').addEventListener('click', () => openModal('walletModal'));
document.getElementById('btnSubmitBP').addEventListener('click', () => openModal('bpModal'));
document.getElementById('btnSubmitBPCta').addEventListener('click', () => openModal('bpModal'));
document.getElementById('btnDeposit').addEventListener('click', () => {
    if(!walletConnected) {
        alert("请先连接钱包");
        openModal('walletModal');
    } else {
        document.getElementById('walletBalance').innerText = walletBalance.toFixed(2) + ' USDC';
        openModal('depositModal');
    }
});

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

// 1. Connect Wallet Simulation
function simulateConnectWallet(walletName) {
    const btn = document.getElementById('btnConnectWallet');
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 连接中...`;
    
    setTimeout(() => {
        walletConnected = true;
        walletAddress = '0x7A' + Math.floor(Math.random() * 100000) + '...B9A';
        walletBalance = 15420.50;
        
        btn.innerHTML = `<i class="fas fa-wallet"></i> ${walletAddress}`;
        btn.style.borderColor = '#2ee6d8';
        btn.style.color = '#ffffff';
        btn.style.background = 'rgba(46, 230, 216, 0.1)';
        
        closeModal('walletModal');
    }, 800);
}

// 2. Deposit Simulation
function simulateDeposit() {
    const amountInput = document.getElementById('depositAmount');
    const amount = parseFloat(amountInput.value);
    
    if(!amount || amount <= 0) {
        alert("请输入有效的金额");
        return;
    }
    
    if(amount > walletBalance) {
        alert("余额不足");
        return;
    }
    
    const btn = document.querySelector('#depositModal .btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 正在上链确认...`;
    
    setTimeout(() => {
        walletBalance -= amount;
        alert(`成功存入 ${amount} USDC! 感谢您为去中心化创投网络提供流动性。`);
        closeModal('depositModal');
        btn.innerHTML = originalText;
        amountInput.value = '';
    }, 1500);
}

// 3. AI Agent BP Evaluation Simulation
function submitBP() {
    const name = document.getElementById('bpName').value;
    if(!name) {
        alert("请输入项目名称");
        return;
    }
    
    const btn = document.querySelector('#bpModal .btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 正在提交...`;
    
    setTimeout(() => {
        closeModal('bpModal');
        btn.innerHTML = originalText;
        startAIEvaluation(name);
    }, 600);
}

function startAIEvaluation(projectName) {
    // Scroll to agent panel
    document.getElementById('platform').scrollIntoView({ behavior: 'smooth' });
    
    const badge = document.getElementById('agentStatusBadge');
    badge.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> 正在评估 [${projectName}]`;
    badge.style.color = '#f1c40f';
    badge.style.borderColor = '#f1c40f50';
    badge.style.background = '#f1c40f10';
    
    const steps = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3')
    ];
    
    // Reset steps
    steps.forEach(step => {
        const statusIcon = step.querySelector('.step-status');
        statusIcon.className = 'fas fa-circle step-status';
        statusIcon.style.color = 'rgba(255,255,255,0.1)';
        step.querySelector('.sub').innerText = '等待中...';
    });
    
    // Reset payout
    document.getElementById('simScore').innerText = '- / 100';
    document.getElementById('simAmount').innerText = '- USDC';
    document.getElementById('simStatus').innerText = '待触发 →';
    document.getElementById('simStatus').style.color = '#7e9dbb';
    
    // Sequence
    let delay = 0;
    
    // Step 1
    setTimeout(() => {
        activateStep(steps[0], "分析技术可行性与 TAM...");
    }, delay += 500);
    
    setTimeout(() => {
        completeStep(steps[0], "通过：TAM $15B+");
    }, delay += 2500);
    
    // Step 2
    setTimeout(() => {
        activateStep(steps[1], "生成 GTM 策略推演...");
    }, delay += 500);
    
    setTimeout(() => {
        completeStep(steps[1], "通过：高市场匹配度");
    }, delay += 3000);
    
    // Step 3
    setTimeout(() => {
        activateStep(steps[2], "多 Agent 交叉辩论风控...");
    }, delay += 500);
    
    setTimeout(() => {
        completeStep(steps[2], "通过：合规及团队无风险");
    }, delay += 3500);
    
    // Final Result
    setTimeout(() => {
        badge.innerHTML = `<i class="fas fa-check-circle"></i> 评估完成`;
        badge.style.color = '#2ecc71';
        badge.style.borderColor = '#2ecc7150';
        badge.style.background = '#2ecc7110';
        
        document.getElementById('payoutSim').style.background = '#072418';
        
        document.getElementById('simScore').innerText = '88 / 100 (A级)';
        document.getElementById('simScore').style.color = '#2ee6d8';
        
        document.getElementById('simAmount').innerText = '$250,000 USDC';
        document.getElementById('simAmount').style.color = '#2ee6d8';
        
        document.getElementById('simStatus').innerText = '已发放至创始团队钱包';
        document.getElementById('simStatus').style.color = '#2ecc71';
        
        // Confetti effect could go here if we added a library, but alert works for now
        setTimeout(() => {
            alert(`恭喜！项目 [${projectName}] 已通过 VentureMind v2.3 的多维度 AI 尽调。\n智能合约已自动将 $250,000 USDC 启动资金转入您的钱包。`);
        }, 500);
        
    }, delay += 1000);
}

function activateStep(stepEl, text) {
    stepEl.querySelector('.sub').innerText = text;
    stepEl.querySelector('.sub').style.color = '#f1c40f';
    const statusIcon = stepEl.querySelector('.step-status');
    statusIcon.className = 'fas fa-spinner fa-pulse step-status';
    statusIcon.style.color = '#f1c40f';
}

function completeStep(stepEl, text) {
    stepEl.querySelector('.sub').innerText = text;
    stepEl.querySelector('.sub').style.color = '#2ecc71';
    const statusIcon = stepEl.querySelector('.step-status');
    statusIcon.className = 'fas fa-check step-status';
    statusIcon.style.color = '#2ecc71';
}