
#add auto login
alias sshjump='/usr/local/bin/sshjump.sh'
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/cuda/lib64"
export CUDA_HOME=/usr/local/cuda
export PATH=~/Users/wenshichen/miniconda3/bin/conda:$PATH
export PATH="$HOME/.cargo/bin:$PATH"

source ~/.bashrc


# Setting PATH for Python 3.6
# The original version is saved in .bash_profile.pysave
PATH="/Users/wenshichen/Library/Python/3.6/bin/:/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH




# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/wenshichen/miniconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/wenshichen/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/wenshichen/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/wenshichen/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

. "$HOME/.cargo/env"

# Setting PATH for Python 3.10
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.10/bin:${PATH}"
export PATH

# Added by Windsurf
export PATH="/Users/wenshichen/.codeium/windsurf/bin:$PATH"
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"


